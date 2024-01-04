import styles from './card.css';

export default class Card extends HTMLElement {

  selectItem() {
    alert(`selected item is => ${this.getAttribute('title')}!`);
  }

  constructor() {
    super();
    this.thumbnail; //  = this.getAttribute('thumbnail');
    this.title; //  = this.getAttribute('title');
  }

  connectedCallback() {
    console.log(this);
    if (!this.shadowRoot) {
      console.log('NO ROOT!');
      this.thumbnail = this.getAttribute('thumbnail');
      this.title = this.getAttribute('title');

      this.attachShadow({ mode: 'open' });
      this.render();
    } else {
      console.log('ROOT!');
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