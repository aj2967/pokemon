import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Loader from "../components/Loader";
import Dropdown from "../components/Dropdown";

const Pokedex = () => {
  const [loaded, setLoaded] = useState(false);
  const [pokedex, setPokedex] = useState([]);
  const [clickedPokemon, setClickedPokemon ] = useState();

  const [filtered, setFiltered] = useState([]);
  const [displayPerLoad, setDisplayPerLoad] = useState(50);
  const [selected, setSelected] = useState('All');

  const [loadMoreMessage, setLoadMoreMessage] = useState('');
  const [loadMore, setLoadMore] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${displayPerLoad}`);

  const getPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next)
    // console.log(data);

    const createPokeObject = result => {
      result.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await res.json();

        setPokedex(currentList => [...currentList, data]);
        setFiltered(currentList => [...currentList, data]);
        // console.log(filtered);
      })
    }
    createPokeObject(data.results)
    // console.log(pokedex);
  }

  useEffect(() => {
    setLoaded(false);
    getPokemons()
    
    setTimeout(() => {
      setLoaded(true);
    }, 1000);

  }, [displayPerLoad])
  
  useEffect(() => { 
      if (selected === 'All') {
          setFiltered(pokedex)
          return;
      }

      const filtered = pokedex.filter(pokemon => pokemon.types[0].type.name.includes(selected.toLowerCase()))
      setFiltered(filtered);
      
      if (filtered.length === 0) {
        setLoadMoreMessage('Please click the button below to load more')
      } else {
        setLoadMoreMessage('');
      }
      console.log(filtered.length);
  }, [selected, pokedex])

  const selectTypeFilter = ['All', 'Normal', 'Fighting', 'Flying', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel', 'Fire', 'Water', 'Grass', 'Electric', 'Psychic', 'Ice', 'Dragon', 'Dark', 'Fairy', 'Shadow'];

  const selectNumberFilter = [1, 10]

  return (
    <div>
      <div className="filter-container">
        
        
        <Dropdown 
          value={selected} 
          setValue={setSelected} 
          options={selectTypeFilter} 
        />
        {/* <Dropdown 
          value={displayPerLoad} 
          setValue={setDisplayPerLoad} 
          options={selectNumberFilter} 
        /> */}
      </div>

      <div layout className="pokedex-container">
          {!loaded ? (
              <Loader />
          ) : (
            filtered.map((pokemon, i) => (
              <Link to={`${pokemon.id}`} className="box" onClick={() => {setClickedPokemon(pokemon.id)}} key={i}>
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

      
        <div className="load-more-message"><i>{loadMoreMessage}</i></div>
      

      <button className="btn load-more" onClick={() => getPokemons()}>Load More</button>
    </div>
  )
}

export default Pokedex