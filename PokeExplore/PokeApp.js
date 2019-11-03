import Component from '../Component/Component.js';
import Header from '../common/Header.js';
import Footer from '../common/footer.js';
import SearchOptions from '../PokeExplore/SearchOptions.js';
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

        const pokeList = new PokeList({ pokes: [] });
        listSection.appendChild(pokeList.renderDOM());

        const footer = new Footer();
        listSection.appendChild(footer.renderDOM());
        

        const response = await getPokes();
       
        const pokes = response.results;

        pokeList.update({ pokes: pokes });
    }

    renderHTML() {
        return /*html*/`
           
                <main class ="main">
                    <section class='poke-filter-container'>
                    </section>
                    <section class="section-b" class="grid">    
                    <section class="poke-list">
                    <section class="footer">
                    </section>
                    </section>
                    </section>
                </main>
                
          
        `;
    }
}

export default PokeApp;
