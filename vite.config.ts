import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";

function renderPreviewPlugin(): Plugin {
  return {
    name: "render-static-preview",
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        const urlPath = (req.url || "/").split("?")[0];

        const clientDirs = [
          path.resolve(process.cwd(), "dist/client"),
          path.resolve(process.cwd(), ".output/public"),
        ];

        const targetDir = clientDirs.find((dir) => fs.existsSync(dir));
        if (!targetDir) return next();

        let filePath = path.join(targetDir, urlPath);
        if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
          filePath = path.join(filePath, "index.html");
        }

        if (!fs.existsSync(filePath)) {
          filePath = path.join(targetDir, "index.html");
          if (!fs.existsSync(filePath)) {
            filePath = path.join(targetDir, "_shell.html");
          }
        }

        if (!fs.existsSync(filePath)) return next();

        const ext = path.extname(filePath).toLowerCase();
        const mimeTypes: Record<string, string> = {
          ".html": "text/html; charset=utf-8",
          ".js": "text/javascript; charset=utf-8",
          ".css": "text/css; charset=utf-8",
          ".json": "application/json",
          ".jpg": "image/jpeg",
          ".jpeg": "image/jpeg",
          ".png": "image/png",
          ".gif": "image/gif",
          ".svg": "image/svg+xml",
          ".ico": "image/x-icon",
          ".pdf": "application/pdf",
          ".txt": "text/plain",
          ".woff": "font/woff",
          ".woff2": "font/woff2",
        };

        const contentType = mimeTypes[ext] || "application/octet-stream";

        fs.readFile(filePath, (err, data) => {
          if (err) return next(err);
          res.statusCode = 200;
          res.setHeader("Content-Type", contentType);
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.end(data);
        });
      });
    },
  };
}

export default defineConfig({
  plugins: [renderPreviewPlugin()],
  tanstackStart: {
    spa: { enabled: true },
  },
  nitro: false,
  vite: {
    preview: {
      host: "0.0.0.0",
      port: process.env["PORT"] ? Number(process.env["PORT"]) : 4173,
      allowedHosts: true,
    },
    server: {
      allowedHosts: true,
    },
  },
});
