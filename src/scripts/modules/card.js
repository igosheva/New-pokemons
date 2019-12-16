import { Popup } from './popup';

export class Card {
  constructor(container, props) {
    this.name = props.name;
    this.sprites = props.sprites;
    this.container = container;
    this.card = null;
    this.showPopup = this.showPopup.bind(this);
  }

  template() {
    const templateString = `<div class="col-lg-6" style="margin-bottom: 20px;">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <img src=${this.sprites.front_default} alt="">
                <img src=${this.sprites.front_shiny} alt="">
                <button id="showProduct">Подробнее</button>
              </div>
            </div>
          </div>`;
    const element = document.createElement('div');
    element.insertAdjacentHTML('beforeend', templateString.trim());
    return element.firstChild;
  }

  render() {
    this.card = this.template();
    this.container.appendChild(this.card);
    this.addListeners();
  }

  showPopup() {
    const popup = new Popup('Тут должен быть текст про покемона');
    popup.render();
  }

  addListeners() {
    this.card.querySelector('#showProduct').addEventListener('click', this.showPopup);
  }
}
