export async function fetchKantoPokemon() {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data = await response.json();
        resolve(data.results);
      } catch (error) {
        reject(error);
      }
    }, 5000);
  });
}

export async function fetchKantoPokemonFail() {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      reject('Failed to fetch Kanto Pokemon');
    }, 5000);
  });
}