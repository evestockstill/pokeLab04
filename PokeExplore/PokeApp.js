import Component from '../Component/Component.js';
import Header from '../common/Header.js';
import Footer from '../common/footer.js';
import Paging from '../PokeExplore/Paging.js';
import SearchOptions from '../PokeExplore/SearchOptions.js';
import PokeList from '../PokeExplore/PokeList.js';
import { getPokes } from '../services/poke-api.js';

class PokeApp extends Component {

    onRender(element) {
        const header = new Header();
        element.prepend(header.renderDOM());

        const optionsSection = element.querySelector('.poke-filter-container');
        const searchOptions = new SearchOptions();
        optionsSection.prepend(searchOptions.renderDOM());

        const listSection = element.querySelector('.poke-list');
        const paging = new Paging({ totalResults: 0 });
        listSection.appendChild(paging.renderDOM());

        const pokeList = new PokeList({ pokes: [] });
        listSection.appendChild(pokeList.renderDOM());

        const footer = new Footer();
        listSection.appendChild(footer.renderDOM());
       
        const loadPokes = async() => {
            const response = await getPokes();
            const pokes = response.results;
            const totalResults = response.totalResults;
            pokeList.update({ pokes: pokes });
            paging.update({ totalResults: totalResults });
        };
        loadPokes();

        window.addEventListener('hashchange', () => {
            loadPokes();
        });
    }

    renderHTML() {
        return /*html*/`
           
                <main class ="main">
                    <section class='poke-filter-container'>
                    </section>
                    <section class="section-b" class="grid">    
                    <section class="poke-list">
                   
                    </section>
                    </section>
                </main>
                
          
        `;
    }
}

export default PokeApp;
