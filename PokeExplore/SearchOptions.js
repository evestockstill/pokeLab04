import Component from '../Component/Component.js';
// import PokeList from '../PokeExplore/PokeList.js';

class SearchOptions extends Component {
    onRender(form) {
        const pokeSearchInput = form.querySelector('input[name=search]');

        function updatePokeControls() {
            const pokeQueryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(pokeQueryString);

            pokeSearchInput.value = searchParams.get('pokemon') || '';
            window.addEventListener('hashchange', () => {
                updatePokeControls();
            });
        } updatePokeControls();
        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);

            const pokeQueryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(pokeQueryString);

            // searchParams.set('type', formData.get('type'));
            searchParams.set('pokemon', formData.get('pokemon'));
            searchParams.set('page', 1);
            window.location.hash = searchParams.toString();
        });
    }

    renderHTML() {
        return /*html*/ `
                <form>
                    <fieldset>
                    <section class = "poke-type-filter">
                    <input class="poke-name-filter" type="text" name="search" value="name">
                    <p>
                    <button>Pokémon Search 🔍</button>
                    </p>
                    
                    </fieldset>
                    </form>
                    </section>
                    
                    `;
    }
}

export default SearchOptions;

/* <select class="poke-type-filter">
<option value="" selected>All Types</option>
<option value="bug">Bug</option>
<option value="dark">Dark</option>
<option value="dragon">Dragon</option>
<option value="electric">Electric</option>
<option value="fairy">Fairy</option>
<label>
    <input type="radio" name="type" value="poke" checked>
    <p class="search-name"> Search Pokemon by Name</p>
</label>
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
</select> */