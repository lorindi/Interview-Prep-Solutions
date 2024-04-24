import { useState } from "react";
import { fetchKantoPokemon } from "./helpers/helpers";

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPokemon = async () => {
    setLoading(true);
    try {
      const pokemonData = await fetchKantoPokemon();
      console.log(pokemonData);
      setPokemons(pokemonData);
    } catch (error) {
      console.error("Failed to fetch Kanto Pokemon");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button onClick={fetchPokemon} disabled={loading}>
        {loading ? "Loading..." : "Fetch Pokemon"}
      </button>
      {!loading && (
        <ul>
          {pokemons.map((pokemon, index) => (
            <li key={index}>{pokemon.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

// function fetchPokemon() {
//   alert("Fetch");
// }

// const fetchPokemon = () => {
//   fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => setPokemons(data.results))
//     .catch((error) => console.error(error))
//     .finally(() => console.log('fetchPokemon done'))
// };

// async function fetchPokemon() {
//   try {
//     const res = await fetch(apiUrl)
//     const data = await res.json()
//     setPokemons(data.results)
//   } catch (e) {
//     console.error(e);
//   } finally {
//     console.log('fetchPokemon done');
//   }
// }
