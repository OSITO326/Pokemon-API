// Pokedex API
const urlPokedex = 'https://pokeapi.co/api/v2/pokedex';

// get fetch
const fetchPokedex = async (id) => {
  const resp = await fetch(`${urlPokedex}/${id}`);
  const { pokemon_entries } = await resp.json();
  return pokemon_entries.map((pokemon) => ({
    id: pokemon.entry_number,
    name: pokemon.pokemon_species.name,
    url: pokemon.pokemon_species.url,
  }));
};
export { fetchPokedex };
