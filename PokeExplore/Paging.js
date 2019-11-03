import Component from '../Component/Component.js';

class Paging extends Component {

    onRender(element) {
        const prevPokeButton = element.querySelector('.prev');
        const nextPokeButton = element.querySelector('.next');
        if (!prevPokeButton) {
        //  debugger
            return;
        }
        let page = 1;

        function updatePokeControls() {
            const pokeQueryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(pokeQueryString);

            const parsedPokePage = parseInt(searchParams.get('page'));
            if (isNaN(parsedPokePage)) {
                page = 1;
            }
            else {
                page = parsedPokePage;
            }
        }

        updatePokeControls();

        window.addEventListener('hashchange', () => {
            updatePokeControls();
        });

        function updatePokePage(increment) {
            const pokeQueryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(pokeQueryString);
            searchParams.set('page', page + increment);

            window.location.hash = searchParams.toString();
        }

        prevPokeButton.addEventListener('click', () => {
            updatePokePage(-1);
        });

        nextPokeButton.addEventListener('click', () => {
            updatePokePage(1);
        });
    }

    renderHTML() {
        const pokePerPage = 10;
        const totalResults = this.props.totalResults;
        const pokeQueryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(pokeQueryString);

        let page = 1;
        const parsedPokePage = parseInt(searchParams.get('page'));
        if (isNaN(parsedPokePage)) {
            page = 1;
        }
        else {
            page = parsedPokePage;
        }

        if (!totalResults) {
            return /*html*/`
                 <p class="paging">There are no Pokémon with that criteria!</p>
            `;
        }

        const lastPokePage = Math.ceil(totalResults / pokePerPage);

        return /*html*/`
            <p class="paging">
                <button class="prev" ${page === 1 ? 'disabled' : ''}>◀</button>
                <span>Pokémon ${page} of ${lastPokePage}</span>
                <button class="next" ${page === lastPokePage ? 'disabled' : ''}>▶</button>
            </p>
        `;
    }
}

export default Paging;