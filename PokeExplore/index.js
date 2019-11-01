import HomeApp from '../home/HomeApp.js';

const app = new HomeApp();
const element = app.renderDOM();
document.body.prepend(element);