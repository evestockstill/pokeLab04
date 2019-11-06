import Component from '../Component/Component.js';
import PokeItem from './PokeItem.js';

class PokeList extends Component {
    
    onRender(element) {
        const pokes = this.props.pokes;

        pokes.forEach(poke => {
            const props = { poke };
            const pokeItem = new PokeItem(props);
            const pokeItemDOM = pokeItem.renderDOM();
            element.appendChild(pokeItemDOM);
        });
    } 
    renderHTML() {
        return /*html*/`
                <ul class="all-poke">       
        `;
    }
}


export default PokeList;
