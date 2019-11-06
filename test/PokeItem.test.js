import PokeItem from '../PokeExplore/PokeItem.js';
const test = QUnit.test;

QUnit.module('Render Poke Item');

test('renders html from data', assert => {
    // arrange
    const poke = {
        
    };

    const expected = /*html*/`
          <li class="poke-item">
    <div>
    <a href="http://assets.pokemon.com/assets/${poke.id}" target="_blank"></a>
        <img src="${poke.url_image}" alt="${poke.id}>
            <div class="poke-cards">
                <h2 class="poke-name">${poke.pokemon}</h2>
                </div>
                </div>
                </li>

    `;

    // act
    const props = { poke: poke };
    const pokeItem = new PokeItem(props);
    const html = pokeItem.renderHTML();

    // assert
    assert.htmlEqual(html, expected);
});