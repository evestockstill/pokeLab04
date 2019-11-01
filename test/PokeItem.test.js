import PokeItem from '../PokeExplore/PokeItem.js';
const test = QUnit.test;

QUnit.module('Render Poke Item');

test('renders html from data', assert => {
    // arrange
    const poke = {
        
    };

    const expected = /*html*/`
         <li>
                        <div class="poke-pic">
                            <img src="${poke.url_image}http://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png alt="pokemon">
                            <div class="poke-cards">
                                <h3 class="poke-name">${poke.pokemon}</h3>
                                <h2>They are of the type ${poke.type_1}</h2>
                                <p>This pokemon has a defense of ${poke.defense} and attack is at ${poke.attack} The egg group is ${poke.egg_group_1}</p>
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