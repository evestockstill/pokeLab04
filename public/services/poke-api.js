const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex?';


export async function getPokes() {

    let pokeQueryString = window.location.hash.slice(1);
    const url = `${URL}${pokeQueryString}`;

    const response = await fetch(url);
    const pokeData = await response.json();

    if (pokeData.Response === 'False') {
        return {
            Search: [],
            totalResults: 0
        };
    }

    return pokeData;
}