import Component from '../Component/Component.js';

class PokeItem extends Component {
    renderHTML() {
        const poke = this.props.poke;
        let image = poke.url_image;
        if (image === 'N/A') {
            image = '.assets/pokemon.jpeg';
        }
        return `
        <li class="poke-item">
    <div>
    <a href="http://assets.pokemon.com/assets/${poke.id}" target="_blank"></a>
        <img src="${image}" alt="${poke.id}>
            <div class="poke-cards">
                <h2 class="poke-name">${poke.pokemon}</h2>
                </div>
                </div>
                </li>

                
        `;
    }
}

export default PokeItem;

/* <li class="poke-list">
    <div>
        <img src="${poke.url_image}">
            <div class="poke-cards">
                <h2 class="poke-name">${poke.pokemon}</h2>
                <h6>They are of the type ${poke.type_1}</h6>
                <p>This pokemon has a defense of ${poke.defense} and attack is at ${poke.attack} The egg group is ${poke.egg_group_1}</p>
            </div>  
                        </div>
                    </li> */