import { appendFile, createReadStream, existsSync } from "node:fs";
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

function readRequestBody(request) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    request.on("data", (chunk) => chunks.push(chunk));
    request.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    request.on("error", reject);
  });
}

createServer(async (request, response) => {
  const requestUrl = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`);

  if (request.method === "POST" && requestUrl.pathname === "/api/contact") {
    try {
      const raw = await readRequestBody(request);
      const payload = JSON.parse(raw || "{}");
      const required = ["firstName", "lastName", "email", "interest", "message"];
      const missing = required.filter((key) => !String(payload[key] || "").trim());

      if (missing.length > 0) {
        response.writeHead(400, { "Content-Type": "application/json; charset=utf-8" });
        response.end(JSON.stringify({ ok: false, error: "Missing required fields" }));
        return;
      }

      const submission = {
        receivedAt: new Date().toISOString(),
        ...payload
      };

      console.log("Contact submission", JSON.stringify(submission));
      appendFile(join(rootDir, "contact-submissions.log"), `${JSON.stringify(submission)}\n`, () => {});

      response.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      response.end(JSON.stringify({ ok: true }));
      return;
    } catch {
      response.writeHead(500, { "Content-Type": "application/json; charset=utf-8" });
      response.end(JSON.stringify({ ok: false, error: "Could not process submission" }));
      return;
    }
  }

  let filePath = resolvePath(requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname);

  if (!existsSync(filePath) && !extname(filePath)) {
    const htmlPath = `${filePath}.html`;
    if (existsSync(htmlPath)) {
      filePath = htmlPath;
    }
  }

  if (!existsSync(filePath)) {
    sendNotFound(response);
    return;
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
