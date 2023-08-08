export default class Card extends HTMLElement {

  selectArtist() {
    alert(`selected artist is => ${this.getAttribute('title')}!`);
  }

  connectedCallback() {
    if (!this.shadowRoot) {
      const thumbnail = this.getAttribute('thumbnail');
      const title = this.getAttribute('title');
      const template = document.createElement('template');

      template.innerHTML = `
        <style>
          div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            border: 1px solid #818181;
            width: fit-content;
            border-radius: 10px;
            padding: 2rem 1rem;
            height: 680px;
            justify-content: space-between;
            background-color: #fff;
          }
          button {
            background: var(--color-accent);
            color: var(--color-white);
            padding: 1rem 2rem;
            border: 0;
            font-size: 1rem;
            border-radius: 5px;
          }
          img {
            max-width: 500px;
            min-width: 500px;
            width: 100%;
          }
          h3 {
            font-size: 1.85rem;
          }

          @media(max-width: 768px) {
            img {
              max-width: 300px;
              min-width: 300px;
            }
            div {
              height: 500px;
            }
          }
        </style>
        <div>
          <h3>${title}</h3>
          <img src="${thumbnail}" loading="lazy" width="100%">
          <button onclick="this.parentNode.parentNode.host.selectArtist()">View Artist Details</button>
        </div>
      `;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}

customElements.define('app-card', Card);
