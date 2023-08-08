import { renderFromHTML } from 'wc-compiler';
import { getArtists } from '../services/artists.js';

export async function handler(request) {
  const params = new URLSearchParams(request.url.slice(request.url.indexOf('?')));
  const offset = params.has('offset') ? parseInt(params.get('offset'), 10) : null;
  const limit = 5;
  const headers = new Headers();
  const artists = (await getArtists()).slice(offset, offset + limit);
  const { html } = await renderFromHTML(`
    ${
      artists.map((item, idx) => {
        const { name, imageUrl } = item;

        return `
          <app-card
            title="${offset + idx + 1}) ${name}"
            thumbnail="${imageUrl}"
          ></app-card>
        `;
      }).join('')
    }
  `, [
    new URL('../components/card.js', import.meta.url)
  ]);

  headers.append('Content-Type', 'text/html');

  return new Response(html, {
    headers
  });
}