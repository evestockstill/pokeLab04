import Component from '../Component/Component.js';

class Footer extends Component {
    renderHTML() {
        return /*html*/`
        <footer class="footer">
        <section class="section-d" class="grid"></section>
                <div class="box">
                    <h2 class="poke-hotline">Inspiration</h2>
                    <p>“Even If we don’t understand each other, that’s not a reason to reject each other. There are two sides to any argument.
                    Is there one point of view that has all the answers? Give it some thought.” – Alder <br> Strong Pokemon. Weak Pokemon. That is only the selfish perception of people. Truly skilled trainers should try to win
                    with all their favorites.” – Karen <br> “Take charge of your destiny.” – Rayquaza <br>“The important thing is not how long you live. It’s what you accomplish with your life.” – Grovyle</p>
                </div>
                <div class="box">
                    <h2 class="poke-backstory">About Pokemon</h2>
                    <p>Pokémon are creatures of all shapes and sizes who live in the wild or alongside humans. For the most part, Pokémon do
                    not speak except to utter their names. Pokémon are raised and commanded by their owners (called “Trainers”). During
                    their adventures, Pokémon grow and become more experienced and even, on occasion, evolve into stronger Pokémon. There
                    are currently more than 700 creatures that inhabit the Pokémon universe.<cite>The Pokémon Company</cite></p>
                </div>
            </section>
            <section class= "main-footer">
            <div></div>
            <div>Project by Eve Stockstill</div>
        </footer>
        `;
    }
}

export default Footer;