// import Component from '../Component/Component.js';
// import PokeList from './PokeList.js';

// class FilterPokes extends Component {
//     onRender(select) {
//         const onFilter = this.props.onFilter;
//         select.addEventListener('input', () => {
//             onFilter(select.value);
//             PokeList.update();
//         });
//     }

//     renderHTML() {
//         return /*html*/`
//         <form>
//                 <fieldset>
//         <section class = "poke-type-filter">
//         <input class="poke-name-filter" type="text" placeholder="Pokemon Name" name="search" value="">
//                         <button class="filter">Find Your Pokemon</button>
//                     </div>
//                     <div class="poke-filter-container">
//                         <input class="poke-type-filter" type="number" name="filter-attack" placeholder="By ID" value="">
//                         <button class="filter">Find Your Pokemon</button>
//                     </div>
//                     <select class="poke-type-filter">
//                         <option value="" selected>All Types</option>
//                         <option value="bug">Bug</option>
//                         <option value="dark">Dark</option>
//                         <option value="dragon">Dragon</option>
//                         <option value="electric">Electric</option>
//                         <option value="fairy">Fairy</option>
//                         <option value="fighting">Fighting</option>
//                         <option value="fire">Fire</option>
//                         <option value="flying">Flying</option>
//                         <option value="ghost">Ghost</option>
//                         <option value="grass">Grass</option>
//                         <option value="ground">Ground</option>
//                         <option value="ice">Ice</option>
//                         <option value="normal">Normal</option>
//                         <option value="poison">Poison</option>
//                         <option value="psychic">Psychic</option>
//                         <option value="rock">Rock</option>
//                         <option value="steel">Steel</option>
//                         <option value="water">Water</option>
//                     </select>
//                 </fieldset>
//             </form> 
//         </section>
            
//         `;
//     }
// }

// export default FilterPokes;
