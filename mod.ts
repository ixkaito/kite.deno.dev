addEventListener('fetch', (event) => {
  const html = `<!DOCTYPE html><html lang="en">
    <head>
      <title>Kite</title>
    </head>
    <body>
      <p>Hello, I'm Kite. Find me on <a href="https://twitter.com/ixkaito">Twitter</a>.</p>
    </body>
  </html>`;
  
  const response = new Response(html, {
    headers: { 'content-type': 'text/html; charset=UTF-8' },
  });
  
  event.respondWith(response);
});
