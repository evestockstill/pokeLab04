import Component from '../Component/Component.js';

class SearchOptions extends Component {

    onRender(form) {
        const pokeNameInput = form.querySelctor('input [name=search]');
        // const pokeTypeSelect = form.querySelctor('input [select]');

        const updatePokeControls = () => {
            const pokeQueryString = window.location.hash.slice(1);
            const seachParams = new URLSearchParams(pokeQueryString);

            pokeNameInput.value = seachParams.get('s') || '';

        };

        updatePokeControls();
        window.addEventListener('hashchange', () => {
            updatePokeControls();
        });
        form.addEventListener('submint', event => {
            event.preventDefault();
            const formData = new FormData(form);
            const pokeQueryString = window.location.hash.slice(1);
            const seachParams = new URLSearchParams(pokeQueryString);
            seachParams.set('s', formData.get('search'));
            seachParams.set('page', 1);
            window.location.hash = seachParams.toString();
        });
    }



    renderHTML() {
        return /*html*/`
        <form>
                <fieldset>
        <section class = "poke-type-filter">
        <input class="poke-name-filter" type="text" placeholder="Pokemon Name" name="search" value="">
                        <button class="filter">Find Your Pokemon</button>
                    </div>
                    
                    
                </fieldset>
            </form> 
        </section>
            
        `;
    }
}


export default SearchOptions;
