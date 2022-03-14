import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Pokedex = () => {
  const [loaded, setLoaded] = useState(false);
  const [pokedex, setPokedex] = useState([]);
  const [clickedPokemon, setClickedPokemon ] = useState();

  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=10');

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
        setFiltered(currentList => [...currentList, data]);
        console.log(filtered);
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
    }, 1000);

  }, [])

  useEffect(() => { 
        if (activeGenre === 'all') {
            setFiltered(pokedex)
            return;
        }
        const filtered = pokedex.filter(pokemon => pokemon.types[0].type.name.includes(activeGenre))
        setFiltered(filtered);
    }, [activeGenre])

  return (
    <div>
      {/* <div className="filter-container">
        <button className={activeGenre === 'all' ? 'active' : ''} onClick={() => setActiveGenre('all')}>All</button>
        <button className={activeGenre === 'normal' ? 'active' : ''} onClick={() => setActiveGenre('normal')}>Normal</button>
        <button className={activeGenre === 'fighting' ? 'active' : ''} onClick={() => setActiveGenre('fighting')}>Fighting</button>
        <button className={activeGenre === 'flying' ? 'active' : ''} onClick={() => setActiveGenre('flying')}>Flying</button>
        <button  className={activeGenre === 'poison' ? 'active' : ''} onClick={() => setActiveGenre('poison')}>Poison</button>
        <button className={activeGenre === 'ground' ? 'active' : ''} onClick={() => setActiveGenre('ground')}>Ground</button>
        <button className={activeGenre === 'rock' ? 'active' : ''} onClick={() => setActiveGenre('rock')}>Rock</button>
        <button className={activeGenre === 'bug' ? 'active' : ''} onClick={() => setActiveGenre('bug')}>Bug</button>
        <button className={activeGenre === 'ghost' ? 'active' : ''} onClick={() => setActiveGenre('ghost')}>Ghost</button>
        <button className={activeGenre === 'steel' ? 'active' : ''} onClick={() => setActiveGenre('steel')}>Steel</button>
        <button className={activeGenre === 'fire' ? 'active' : ''} onClick={() => setActiveGenre('fire')}>Fire</button>
        <button className={activeGenre === 'water' ? 'active' : ''} onClick={() => setActiveGenre('water')}>Water</button>
        <button className={activeGenre === 'grass' ? 'active' : ''} onClick={() => setActiveGenre('grass')}>Grass</button>
        <button className={activeGenre === 'electric' ? 'active' : ''} onClick={() => setActiveGenre('electric')}>Electric</button>
        <button className={activeGenre === 'psychic' ? 'active' : ''} onClick={() => setActiveGenre('psychic')}>Psychic</button>
        <button className={activeGenre === 'ice' ? 'active' : ''} onClick={() => setActiveGenre('ice')}>Ice</button>
        <button className={activeGenre === 'dragon' ? 'active' : ''} onClick={() => setActiveGenre('dragon')}>Dragon</button>
        <button className={activeGenre === 'dark' ? 'active' : ''} onClick={() => setActiveGenre('dark')}>Dark</button>
        <button className={activeGenre === 'fairy' ? 'active' : ''} onClick={() => setActiveGenre('fairy')}>Fairy</button>
        <button className={activeGenre === 'unknown' ? 'active' : ''} onClick={() => setActiveGenre('unknown')}>Unknown</button>
        <button className={activeGenre === 'shadow' ? 'active' : ''} onClick={() => setActiveGenre('shadow')}>Shadow</button>
      </div> */}
      <motion.div layout className="pokedex-container">
          {!loaded ? (
              <Loader />
          ) : (
            filtered.map(pokemon => (
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
      </motion.div>
      <button className="btn load-more" onClick={() => getPokemons()}>Load More</button>
    </div>
  )
}

export default Pokedex