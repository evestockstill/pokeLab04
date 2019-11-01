import Component from '../Component/Component.js';
import PokeItem from './PokeItem.js';

class PokeList extends Component {
    renderHTML() {

        return /*html*/`
            <ul class="all-poke">
        `;
    }
    onRender(element) {
        const pokes = this.props.pokes;

        pokes.forEach(poke => {
            const props = { poke: poke };
            const pokeItem = new PokeItem(props);
            const pokeItemDOM = pokeItem.renderDOM();
            element.appendChild(pokeItemDOM);
        });

    }

    
}


export default PokeList;
