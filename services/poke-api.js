const URL = 'https://alchemy-pokedex.herokuapp.com';

export async function getPokes() {
    const response = await fetch(URL);
    return await response.json();
}