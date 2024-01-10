import '../components/card.jsx';
import { getProducts } from '../services/products.js';

export default class ProductsPage extends HTMLElement {
  async connectedCallback() {
    const products = await getProducts();
    const html = products.map(product => {
      const { title, thumbnail } = product;

      return `
        <app-card
          title="${title}"
          thumbnail="${thumbnail}"
        >
        </app-card>
      `;
    }).join('');

    this.innerHTML = `
      <h2>SSR Page (w/ WCC)</h2>
      <p>This is an example of a Greenwood SSR page route server-rendering Web Components; the same Card component used for the Fragments API demo on the home page in fact!  Greenwood is also statically bundling the share template (written in HTML) so that you can still share page templates even within SSR pages.</p>

      <h3>List of Products: ${products.length}</h3>
      <div class="products-cards-container">
        ${html}
      </div>
    `;
  }
}
