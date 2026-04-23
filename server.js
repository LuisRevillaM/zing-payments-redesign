import { randomUUID } from "node:crypto";
import { createReadStream, existsSync } from "node:fs";
import { appendFile, mkdir, stat } from "node:fs/promises";
import { createServer } from "node:http";
import { dirname, extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL(".", import.meta.url));
const port = Number.parseInt(process.env.PORT || "3000", 10);
const maxContactBodyBytes = 64 * 1024;
const contactSubmissionLogPath =
  process.env.CONTACT_SUBMISSIONS_PATH ||
  (existsSync("/var/data") ? "/var/data/contact-submissions.log" : join(rootDir, "contact-submissions.log"));

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
    let byteCount = 0;
    let tooLarge = false;

    request.on("data", (chunk) => {
      byteCount += chunk.length;
      if (byteCount > maxContactBodyBytes) {
        tooLarge = true;
        return;
      }
      chunks.push(chunk);
    });

    request.on("end", () => {
      if (tooLarge) {
        reject(new Error("Request body too large"));
        return;
      }
      resolve(Buffer.concat(chunks).toString("utf8"));
    });

    request.on("error", (error) => {
      reject(error);
    });
  });
}

function cleanContactPayload(payload) {
  return {
    firstName: String(payload.firstName || "").trim(),
    lastName: String(payload.lastName || "").trim(),
    email: String(payload.email || "").trim(),
    phone: String(payload.phone || "").trim(),
    interest: String(payload.interest || "").trim(),
    message: String(payload.message || "").trim()
  };
}

async function persistContactSubmission(submission) {
  await mkdir(dirname(contactSubmissionLogPath), { recursive: true });
  await appendFile(contactSubmissionLogPath, `${JSON.stringify(submission)}\n`, "utf8");
}

function getSourcePath(request) {
  const referer = request.headers.referer;
  if (!referer) return null;

  try {
    const sourceUrl = new URL(referer);
    return sourceUrl.pathname || "/";
  } catch {
    return null;
  }
}

createServer(async (request, response) => {
  const requestUrl = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`);

  if ((request.method === "GET" || request.method === "HEAD") && requestUrl.pathname === "/healthz") {
    response.writeHead(200, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-cache" });
    response.end(request.method === "HEAD" ? undefined : JSON.stringify({ ok: true }));
    return;
  }

  if (request.method === "POST" && requestUrl.pathname === "/api/contact") {
    try {
      const raw = await readRequestBody(request);
      const payload = cleanContactPayload(JSON.parse(raw || "{}"));
      const required = ["firstName", "lastName", "email", "interest", "message"];
      const missing = required.filter((key) => !String(payload[key] || "").trim());

      if (missing.length > 0) {
        response.writeHead(400, { "Content-Type": "application/json; charset=utf-8" });
        response.end(JSON.stringify({ ok: false, error: "Missing required fields" }));
        return;
      }

      const submission = {
        id: randomUUID(),
        receivedAt: new Date().toISOString(),
        sourcePath: getSourcePath(request),
        ...payload
      };

      await persistContactSubmission(submission);
      console.log(
        "Contact submission stored",
        JSON.stringify({ id: submission.id, receivedAt: submission.receivedAt, interest: submission.interest })
      );

      response.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      response.end(JSON.stringify({ ok: true, submissionId: submission.id }));
      return;
    } catch (error) {
      const statusCode = error.message === "Request body too large" ? 413 : 500;
      response.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
      response.end(
        JSON.stringify({
          ok: false,
          error: statusCode === 413 ? "Submission is too large" : "Could not process submission"
        })
      );
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
