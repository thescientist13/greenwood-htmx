import styles from './card.css';

export const inferredObservability = true;

export default class Card extends HTMLElement {

  selectItem() {
    alert(`selected item is => ${this.getAttribute('title')}!`);
  }

  connectedCallback() {
    if (!this.shadowRoot) {
      this.thumbnail = this.getAttribute('thumbnail');
      this.title = this.getAttribute('title');

      this.attachShadow({ mode: 'open' });
      this.render();
    }
  }

  render() {
    const { thumbnail, title } = this;

    return (
      <div>
        <style>
          {styles}
        </style>

        <h3>{title}</h3>
        <img src={thumbnail} alt={title} loading="lazy" width="100%"/>
        <button onclick={this.selectItem}>View Item Details</button>
      </div>
    )
  }
}

customElements.define('app-card', Card);