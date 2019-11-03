import Component from '../Component/Component.js';

class PokeItem extends Component {
    renderHTML() {
        const poke = this.props.poke;
        return `
                    <li class="poke-list">
                        <div>
                            <img src="${poke.url_image}">
                            <div class="poke-cards">
                                <h3 class="poke-name">${poke.pokemon}</h3>
                                <h2>They are of the type ${poke.type_1}</h2>
                                <p>This pokemon has a defense of ${poke.defense} and attack is at ${poke.attack} The egg group is ${poke.egg_group_1}</p>
                        </div>  
                        </div>
                    </li>
        `;
    }
}

export default PokeItem;
