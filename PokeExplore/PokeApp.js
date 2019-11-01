import Component from '../Component/Component.js';
import Header from '../common/Header.js';
import SearchOptions from '../PokeExplore/SearchOptions.js';
import Paging from '../PokeExplore/Paging.js';
import PokeList from '../PokeExplore/PokeList.js';
import { getPokes } from '../services/poke-api.js';

class PokeApp extends Component {

    async onRender(element) {
        const header = new Header();
        element.prepend(header.renderDOM());

        const optionsSection = element.querySelector('.poke-filter-container');
        const searchOptions = new SearchOptions();
        optionsSection.prepend(searchOptions.renderDOM());

        const listSection = element.querySelector('.poke-list');
        const paging = new Paging();
        listSection.appendChild(paging.renderDOM());

        const pokeList = new PokeList({ pokes: [] });
        listSection.appendChild(pokeList.renderDOM());

        const response = await getPokes();
        const pokes = response.Search;
        pokeList.update({ pokes: pokes });
    }

    renderHTML() {
        return /*html*/`
            <div>
                <main>
                    <section class="options-section">
                    </section>
                        
                    <section class="list-section">
                    </section>
                </main>
            </div>
        `;
    }
}

export default PokeApp;
