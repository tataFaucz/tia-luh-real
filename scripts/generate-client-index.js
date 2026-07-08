const fs = require('fs');
const path = require('path');

const root = process.cwd();
const distClient = path.join(root, 'dist', 'client');
const assetsDir = path.join(distClient, 'assets');

if (!fs.existsSync(distClient)) {
  console.error('dist/client not found. Run build first.');
  process.exit(1);
}

// find the main index-*.js file in assets
const files = fs.readdirSync(assetsDir);
const jsFile = files.find((f) => /^index-.*\.js$/.test(f));
if (!jsFile) {
  console.error('Could not find client index JS in dist/client/assets');
  process.exit(1);
}

const indexHtmlPath = path.join(root, 'index.html');
if (!fs.existsSync(indexHtmlPath)) {
  console.error('Root index.html not found');
  process.exit(1);
}

let html = fs.readFileSync(indexHtmlPath, 'utf8');
// replace module script src with built client asset path
html = html.replace(/<script[^>]*src="[^"]*"[^>]*><\/script>/, `<script type="module" src="./assets/${jsFile}"></script>`);

// write to dist/client/index.html
fs.writeFileSync(path.join(distClient, 'index.html'), html, 'utf8');
console.log('Wrote dist/client/index.html -> uses', jsFile);
