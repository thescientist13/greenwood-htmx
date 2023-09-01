import { renderFromHTML } from 'wc-compiler';
import { getProducts } from '../services/products.js';

export async function handler(request) {
  const limit = 5;
  const params = new URLSearchParams(request.url.slice(request.url.indexOf('?')));
  const offset = params.has('offset') ? parseInt(params.get('offset'), 10) : 0;
  const products = (await getProducts()).slice(offset, offset + limit);

  const { html } = await renderFromHTML(`
    ${
      products.map((item, idx) => {
        const { title, thumbnail } = item;
        const scrollAttrs = idx === limit - 1
          ? `
              hx-get="/api/fragment?offset=${offset + limit}"
              hx-trigger="revealed"
              hx-target="#products-results"
              hx-swap="beforeend"
            `
          :  '';

        return `
          <app-card
            title="${offset + idx + 1}) ${title}"
            thumbnail="${thumbnail}"
            ${scrollAttrs}
          ></app-card>
        `;
      }).join('')
    }
  `, [
    new URL('../components/card.js', import.meta.url)
  ]);

  return new Response(html, {
    headers: new Headers({
      'Content-Type': 'text/html'
    })
  });
}