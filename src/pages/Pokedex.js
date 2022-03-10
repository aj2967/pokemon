import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { Link } from 'react-router-dom';

const Pokedex = () => {
  const [loaded, setLoaded] = useState(false);
  const [pokedex, setPokedex] = useState([]);
  const [clickedPokemon, setClickedPokemon ] = useState();
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=25');

  const getPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next)
    console.log(data);

    const createPokeObject = result => {
      result.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await res.json();

        setPokedex(currentList => [...currentList, data]);
      })
    }
    createPokeObject(data.results)
    await console.log(pokedex);
  }

  useEffect(() => {
    setLoaded(false);
    getPokemons()
    
    setTimeout(() => {
      setLoaded(true);
    }, 1500);

  }, [])

  // const selectedPokemon = id => {
  //   console.log(id);
  //   setClickedPokemon(id);
  // }

  return (
    <div>
      <div className="pokedex-container">
        {!loaded ? (
           <Loader />
        ) : (
          pokedex.map(pokemon => (
          <Link to={`${pokemon.id}`} className="box" onClick={() => {setClickedPokemon(pokemon.id)}} key={pokemon.id}>
            <div className="number">
              <small>#{pokemon.id}</small>
            </div>
            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
            <div className="details">
              <h3>{pokemon.name}</h3>
              <small>Type: {pokemon.types[0].type.name}</small>
            </div>
          </Link>
        ))
        )}
      </div>
      <button className="btn load-more" onClick={() => getPokemons()}>Load More</button>
    </div>
  )
}

export default Pokedex