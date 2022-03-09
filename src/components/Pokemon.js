import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import Meter from './ProgressMeter';

const Pokemon = () => {
  const { id } = useParams();

  const [loaded, setLoaded] = useState(false);
  const [pokemon, setPokemon] = useState({})

  const apiData = {
      url: 'https://pokeapi.co/api/v2/',
      type: 'pokemon'
  }

  const { url, type } = apiData;
  const apiUrl = `${url}${type}/${id}`;

  useEffect(() => {
    setLoaded(false);
    
    fetch(apiUrl)
        .then(data => {
            return data.json()
        })
        .then(pokemon => {
          setPokemon(pokemon)
          console.log(pokemon);
        })
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, [id])
  
  return (
    <div className="">
      <h1>Pokemon #{pokemon.id}</h1>
      
      {!loaded ? (
        <Loader />
        ) : (
          <div className="card">

          <div className="detail-1">
            <div className="img-container">
              <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
            </div>
            <div className="bio">
              <h1>{pokemon.name} <small>({pokemon.types[0].type.name})</small></h1>
              <div>
                <b>Base Experience:</b>
                <p>{pokemon.base_experience}</p>
              </div>
              <div>
                <b>Height:</b>
                <p>{pokemon.height}</p>
              </div>
              <div>
                <b>Weight:</b>
                <p>{pokemon.weight}</p>
              </div>
            </div>
          </div>
		  <div className="detail-2">
				<h3>Stats</h3>
				<div>
					<b>Hp:</b>
					<p>{pokemon.stats[0].base_stat}</p>
          <Meter percent={pokemon.stats[0].base_stat/100} />
				</div>
				<div>
					<b>Attack:</b>
					<p>{pokemon.stats[1].base_stat}</p>
				</div>
				<div>
					<b>Defence:</b>
					<p>{pokemon.stats[2].base_stat}</p>
				</div>
				<div>
					<b>Special Attack:</b>
					<p>{pokemon.stats[3].base_stat}</p>
				</div>
				<div>
					<b>Special Defence:</b>
					<p>{pokemon.stats[4].base_stat}</p>
				</div>
				<div>
					<b>Speed:</b>
					<p>{pokemon.stats[5].base_stat}</p>
				</div>
			</div>
        
          <div className="detail-3">
			
          </div>
      </div>
      )}
    </div>
  )
}

export default Pokemon