import fs from 'node:fs';
import path from 'node:path';

const targets = ['dist/client', '.output/public'];

for (const target of targets) {
  const shellPath = path.resolve(target, '_shell.html');
  const indexPath = path.resolve(target, 'index.html');
  if (fs.existsSync(shellPath)) {
    fs.copyFileSync(shellPath, indexPath);
    console.log(`[postbuild] Copied ${shellPath} -> ${indexPath}`);
  }
}

// Generate fallback standalone Node server for .output/server/index.mjs
const serverDir = path.resolve('.output/server');
if (!fs.existsSync(serverDir)) {
  fs.mkdirSync(serverDir, { recursive: true });
}

const serverCode = `import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.resolve(__dirname, '../../dist/client');
const ALT_PUBLIC_DIR = path.resolve(__dirname, '../public');

function getPublicDir() {
  if (fs.existsSync(PUBLIC_DIR)) return PUBLIC_DIR;
  if (fs.existsSync(ALT_PUBLIC_DIR)) return ALT_PUBLIC_DIR;
  return __dirname;
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
  const activePublicDir = getPublicDir();
  const fallbackFile = path.join(activePublicDir, 'index.html');
  const altFallbackFile = path.join(activePublicDir, '_shell.html');

  let filePath = path.join(activePublicDir, req.url.split('?')[0]);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (!fs.existsSync(filePath)) {
    filePath = fs.existsSync(fallbackFile) ? fallbackFile : altFallbackFile;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
      return;
    }
    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable',
    });
    res.end(content);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('Server listening on http://0.0.0.0:' + PORT);
});
`;

fs.writeFileSync(path.join(serverDir, 'index.mjs'), serverCode, 'utf8');
console.log('[postbuild] Created standalone Node server in .output/server/index.mjs');
