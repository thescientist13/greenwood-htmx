import styles from './card.css?type=raw';

export default class Card extends HTMLElement {

  selectItem() {
    const itemSelectedEvent = new CustomEvent("update-modal", {
      detail: {
        content: `You selected the "${this.title}"`,
      },
    });

    window.dispatchEvent(itemSelectedEvent);
  }

  connectedCallback() {
    if (!this.shadowRoot) {
      const thumbnail = this.getAttribute('thumbnail');
      const title = this.getAttribute('title');
      const template = document.createElement('template');

      template.innerHTML = `
        <style>
          ${styles}
        </style>
        <div>
          <h3>${title}</h3>
          <img src="${thumbnail}" alt="${title}" loading="lazy" width="100%">
          <button onclick="this.parentNode.parentNode.host.selectItem()">View Item Details</button>
        </div>
      `;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}

customElements.define('app-card', Card);