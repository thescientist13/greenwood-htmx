import styles from './modal.css';

const template = document.createElement('template');

template.innerHTML = `
  <style>
    ${styles}
  </style>
  <dialog>
    <h3 id="content"></h3>
    <button autofocus>Close</button>
  </dialog>
`;

export default class Modal extends HTMLElement {

  updateModal(detail) {
    console.log(`selected item is => ${detail.content}`);
    const modal = this.shadowRoot.querySelector('dialog');
    
    modal.querySelector('#content').textContent = detail.content;
    modal.showModal();
  }

  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    // setup event handlers for updating and closing the dialog
    window.addEventListener('update-modal', (event) => {
      this.updateModal(event.detail);
    })

    const modal = this.shadowRoot.querySelector('dialog');

    modal.querySelector('button').addEventListener("click", () => {
      modal.close();
    });
  }
}

customElements.define('app-modal', Modal);