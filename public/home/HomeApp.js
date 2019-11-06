import Component from '../Component/Component.js';
import Header from '../common/Header.js';

class HomeApp extends Component {

    onRender(element) {
        const header = new Header();
        element.prepend(header.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <div>
                
                <main>
                    <p>
                        <a href="./poke.html">PokéDex</a>
                    </p>
                </main>
            </div>
        `;
    }
}

export default HomeApp;
