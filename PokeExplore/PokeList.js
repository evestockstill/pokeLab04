import Component from '../Component/Component.js';
import PokeItem from './PokeItem.js';

class PokeList extends Component {
    renderHTML() {

        return /*html*/`
             <section class="section-b" class="grid">
                <ul class="all-poke">
                
                </section>
        `;
    }
    onRender(element) {
        const pokes = this.props.pokes;

        pokes.forEach(poke => {
            const props = { poke };
            const pokeItem = new PokeItem(props);
            const pokeItemDOM = pokeItem.renderDOM();
            element.appendChild(pokeItemDOM);
        });

    }

    
}


export default PokeList;
