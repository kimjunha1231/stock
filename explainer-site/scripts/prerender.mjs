import fs from 'node:fs/promises';
import path from 'node:path';

async function generateStaticPages() {
  console.log('[prerender] Pre-rendering static HTML pages...');
  const serverModule = await import('../dist/server/index.js');
  const worker = serverModule.default;

  const routes = [
    '/',
    '/ai-judgment',
    '/formulas',
    '/glossary',
    '/prd',
    '/problem',
    '/product-tour',
    '/roles',
    '/sources',
    '/tech-stack',
    '/workflow'
  ];

  for (const route of routes) {
    const res = await worker.fetch(
      new Request('http://localhost' + route, { headers: { accept: 'text/html' } }),
      { ASSETS: { fetch: async () => new Response('Not found', { status: 404 }) } },
      { waitUntil() {}, passThroughOnException() {} }
    );

    if (res.status === 200) {
      const html = await res.text();
      const clientDir = path.resolve('dist/client');

      if (route === '/') {
        await fs.writeFile(path.join(clientDir, 'index.html'), html, 'utf-8');
        await fs.writeFile(path.join(clientDir, '404.html'), html, 'utf-8');
      } else {
        const routeName = route.slice(1);
        const targetSubDir = path.resolve(clientDir, routeName);

        // 1) Write route.html (e.g. dist/client/formulas.html)
        await fs.writeFile(path.join(clientDir, routeName + '.html'), html, 'utf-8');

        // 2) Write route/index.html (e.g. dist/client/formulas/index.html)
        await fs.mkdir(targetSubDir, { recursive: true });
        await fs.writeFile(path.join(targetSubDir, 'index.html'), html, 'utf-8');
      }

      console.log('✓ Pre-rendered static route:', route);
    } else {
      console.error('✗ Failed to pre-render route:', route, res.status);
    }
  }

  const wranglerPath = path.resolve('dist/server/wrangler.json');
  if (await fs.stat(wranglerPath).catch(() => false)) {
    const wranglerData = JSON.parse(await fs.readFile(wranglerPath, 'utf-8'));
    wranglerData.assets = {
      directory: '../client',
      not_found_handling: 'single-page-application'
    };
    await fs.writeFile(wranglerPath, JSON.stringify(wranglerData, null, 2), 'utf-8');
    console.log('✓ Configured wrangler.json with not_found_handling: single-page-application');
  }
}

generateStaticPages().catch(err => {
  console.error('Prerender error:', err);
  process.exit(1);
});
