import '../components/card.js';
import { getArtists } from '../services/artists.js';

export default class ArtistsPage extends HTMLElement {
  async connectedCallback() {
    const artists = await getArtists();
    const html = artists.map(artist => {
      const { name, imageUrl } = artist;

      return `
        <app-card
          title="${name}"
          thumbnail="${imageUrl}"
        >
        </app-card>
      `;
    }).join('');

    this.innerHTML = `
      <h2>SSR Page (w/ WCC)</h2>
      <p>This is an example of a Greenwood SSR page route server-rendering Web Components; the same Card component used for the Fragments API demo on the home page in fact!  Greenwood is also statically bundling the share template (written in HTML) so that you can still share page templates even within SSR pages.</p>

      <h3>List of Artists: ${artists.length}</h3>
      <div class="artists-cards-contianer">
        ${html}
      </div>
    `;
  }
}
