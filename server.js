import { createReadStream, existsSync } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL(".", import.meta.url));
const port = Number.parseInt(process.env.PORT || "3000", 10);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp"
};

function resolvePath(urlPath) {
  const cleaned = normalize(decodeURIComponent(urlPath).replace(/^\/+/, ""));
  const candidate = join(rootDir, cleaned);
  if (!candidate.startsWith(rootDir)) {
    return join(rootDir, "index.html");
  }
  return candidate;
}

function sendNotFound(response) {
  response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  response.end("Not found");
}

createServer(async (request, response) => {
  const requestUrl = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`);
  let filePath = resolvePath(requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname);

  if (!existsSync(filePath)) {
    filePath = join(rootDir, "index.html");
  }

  try {
    const fileStat = await stat(filePath);
    if (!fileStat.isFile()) {
      sendNotFound(response);
      return;
    }

    response.writeHead(200, {
      "Content-Type": mimeTypes[extname(filePath)] || "application/octet-stream",
      "Cache-Control": filePath.endsWith("index.html") ? "no-cache" : "public, max-age=3600"
    });

    createReadStream(filePath).pipe(response);
  } catch {
    sendNotFound(response);
  }
}).listen(port, "0.0.0.0", () => {
  console.log(`Zing Payments redesign listening on http://0.0.0.0:${port}`);
});
