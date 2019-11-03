import Component from '../Component/Component.js';
// import PokeList from '../PokeExplore/PokeList.js';

class SearchOptions extends Component {
    onRender(form) {
        const pokeSearchInput = form.querySelector('input[name=search]');
        const pokeNameRadios = form.querySelectorAll('input[name=type]');

        function updatePokeControls() {
            const pokeQueryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(pokeQueryString);

            pokeSearchInput.value = searchParams.get('s') || '';

            const pokeName = searchParams.get('name');
            if (pokeName) {
                pokeNameRadios.forEach(pokeNameRadio => {
                    pokeNameRadio.checked = pokeNameRadio.value === name;
                });
            }
        }
        // const onFilter = new OnFilter;
        // select.addEventListener('input', () => {
        //     onFilter(select.value);
        //     onFilter: (pokeKey) => {
        //         let filteredPoke = null;
        //         if (!animalKey) {
        //             filteredPoke = pokes;
        //         }
        //         else {
        //             filteredPoke = pokes.filter(poke => poke.type === pokeKey);
        //         }

        // });
        updatePokeControls();
        window.addEventListener('hashchange', () => {
            updatePokeControls();
        });

        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);

            const pokeQueryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(pokeQueryString);

            searchParams.set('type', formData.get('type'));
            searchParams.set('s', formData.get('search'));
            searchParams.set('page', 1);
            window.location.hash = searchParams.toString();
        });
    }

    renderHTML() {
        return /*html*/ `
                <form>
                    <fieldset>
                    <label>
                        <input type="radio" name="type" value="poke" checked>
                        <p class="search-name"> Search Pokemon by Name</p>
                    </label>
                            <section class = "poke-type-filter">
                        <input class="poke-name-filter" type="text" name="search" value="name">
                    <p>
                            <button>Pokémon Search 🔍</button>
                        </p>
                        <select class="poke-type-filter">
                        <option value="" selected>All Types</option>
                        <option value="bug">Bug</option>
                        <option value="dark">Dark</option>
                        <option value="dragon">Dragon</option>
                        <option value="electric">Electric</option>
                        <option value="fairy">Fairy</option>
                        <option value="fighting">Fighting</option>
                        <option value="fire">Fire</option>
                        <option value="flying">Flying</option>
                        <option value="ghost">Ghost</option>
                        <option value="grass">Grass</option>
                        <option value="ground">Ground</option>
                        <option value="ice">Ice</option>
                        <option value="normal">Normal</option>
                        <option value="poison">Poison</option>
                        <option value="psychic">Psychic</option>
                        <option value="rock">Rock</option>
                        <option value="steel">Steel</option>
                        <option value="water">Water</option>
                    </select>
                </fieldset>
            </form>
        </section>

        `;
    }
}

export default SearchOptions;

