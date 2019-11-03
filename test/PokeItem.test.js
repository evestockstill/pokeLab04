import PokeItem from '../PokeExplore/PokeItem.js';
const test = QUnit.test;

QUnit.module('Render Poke Item');

test('renders html from data', assert => {
    // arrange
    const poke = {
        
    };

    const expected = /*html*/`
        
                    <li class="poke-list">
                        <div>
                            <img src="${poke.url_image}">
                            <div class="poke-cards">
                                <h3 class="poke-name">${poke.pokemon}</h3>
                                <h2>They are of the type ${poke.type_1}</h2>
                                <p>This Pokémon has a defense of ${poke.defense} and attack is at ${poke.attack} The egg group is ${poke.egg_group_1}</p>
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