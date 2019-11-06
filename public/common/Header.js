import Component from '../Component/Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
        <header class="header">
            <a href="../index.html">Home</a>
            <a href="../poke.html">PokéDex</a>
                </header>
        
        `;
    }
}

export default Header;