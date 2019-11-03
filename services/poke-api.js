const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';

export async function getPokes() {
    const response = await fetch(URL);
    return await response.json();
}