import PokeApp from '../PokeExplore/PokeApp.js';

const app = new PokeApp();
const element = app.renderDOM();
document.body.prepend(element);