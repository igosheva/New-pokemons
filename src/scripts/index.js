import {API} from "./modules/api";
import {Card} from "./modules/card";

const cardList = document.querySelector('#card-list');

const ourUrl1 = 'https://pokeapi.co/api/v2/pokemon/1/';
const ourUrl2 = 'https://pokeapi.co/api/v2/pokemon/2/';

const api1 = new API(ourUrl1);
const api2 = new API(ourUrl2);

api1.getData().then((res) => {
  const card = new Card(cardList, res);
  card.render();
});

api2.getData().then((res) => {
  const card = new Card(cardList, res);
  card.render();
});
