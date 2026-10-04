import fs from 'node:fs';
import path from 'node:path';

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" rx="128" fill="#09090b"/>
  <rect x="24" y="24" width="464" height="464" rx="104" fill="none" stroke="#27272a" stroke-width="16"/>
  <text x="210" y="335" font-family="'Space Grotesk', system-ui, -apple-system, sans-serif" font-weight="800" font-size="220" fill="#f4f4f5" text-anchor="middle" letter-spacing="-8">HP</text>
  <circle cx="368" cy="320" r="28" fill="#22c55e"/>
</svg>
`;

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Save SVG favicon
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent, 'utf8');
console.log('[favicon] Created public/favicon.svg');

// Simple multi-resolution ICO header generator from PNG/SVG bytes or direct SVG
// Write favicon.svg as primary and create a lightweight favicon.ico placeholder
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), Buffer.from(svgContent), 'utf8');
console.log('[favicon] Created public/favicon.ico');
