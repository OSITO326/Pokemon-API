// Pokemon API: https://pokeapi.co/api/v2/pokemon/1
const urlPokemon = 'https://pokeapi.co/api/v2/pokemon';

// get fetchPokemon
const fetchPokemon = async (id) => {
  try {
    const resp = await fetch(`${urlPokemon}/${id}`);
    const { name, sprites, stats, height, weight, types } = await resp.json();
    return {
      id,
      name,
      img: sprites.other['official-artwork'].front_default,
      stats: stats.map(({ stat, base_stat }) => ({
        stat: stat.name,
        base_stat,
      })),
      height,
      weight,
      types: types.map(({ type }) => type.name),
    };
  } catch (err) {
    throw err;
  }
};

export { fetchPokemon };
