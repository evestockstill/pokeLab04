import Component from '../Component/Component.js';

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
            searchParams.set('pokemon', formData.get('search'));

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

