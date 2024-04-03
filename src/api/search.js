import { renderFromHTML } from 'wc-compiler';
import { getProducts } from '../services/products.js';

export async function handler(request) {
  const formData = await request.formData();
  const term = formData.has('term') ? formData.get('term') : '';
  const products = (await getProducts())
    .filter((product => {
      return term !== '' && product.title.toLowerCase().includes(term.toLowerCase());
    }));
  let body = '';

  if (products.length === 0) {
    body = '<span class="no-results">No results found.</span>';
  } else {
    const { html } = await renderFromHTML(`
      ${
        products.map((item, idx) => {
          const { title, thumbnail } = item;

          return `
            <app-card
              title="${idx + 1}) ${title}"
              thumbnail="${thumbnail}"
            ></app-card>
          `;
        }).join('')
      }
    `, [
      new URL('../components/card/card.js', import.meta.url)
    ]);

    body = html;
  }

  return new Response(body, {
    headers: new Headers({
      'Content-Type': 'text/html'
    })
  });
}