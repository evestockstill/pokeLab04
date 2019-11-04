import PokeApp from './PokeApp.js';

const pokeApp = new PokeApp();
const element = pokeApp.renderDOM();
document.body.prepend(element);