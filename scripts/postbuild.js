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
