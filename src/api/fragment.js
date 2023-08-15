import { renderFromHTML } from 'wc-compiler';
import { getArtists } from '../services/artists.js';

export async function handler(request) {
  const limit = 5;
  const params = new URLSearchParams(request.url.slice(request.url.indexOf('?')));
  const offset = params.has('offset') ? parseInt(params.get('offset'), 10) : 0;
  const artists = (await getArtists()).slice(offset, offset + limit);

  const { html } = await renderFromHTML(`
    ${
      artists.map((item, idx) => {
        const { name, imageUrl } = item;
        const scrollAttrs = idx === limit - 1
          ? `
              hx-get="/api/fragment?offset=${offset + limit}"
              hx-trigger="revealed"
              hx-target="#artists-results"
              hx-swap="beforeend"
            `
          :  '';

        return `
          <app-card
            title="${offset + idx + 1}) ${name}"
            thumbnail="${imageUrl}"
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