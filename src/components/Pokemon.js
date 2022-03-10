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
              <b>Hp <span>({pokemon.stats[0].base_stat})</span></b>
              <Meter percent={pokemon.stats[0].base_stat/100} />
            </div>
            <div>
              <b>Attack <span>({pokemon.stats[1].base_stat})</span></b>
              <Meter percent={pokemon.stats[0].base_stat/100} />

            </div>
            <div>
              <b>Defence <span>({pokemon.stats[2].base_stat})</span></b>
              <Meter percent={pokemon.stats[0].base_stat/100} />
            </div>
            <div>
              <b>Special Attack <span>({pokemon.stats[3].base_stat})</span></b>
              <Meter percent={pokemon.stats[0].base_stat/100} />
            </div>
            <div>
              <b>Special Defence <span>({pokemon.stats[4].base_stat})</span></b>
              <Meter percent={pokemon.stats[0].base_stat/100} />
            </div>
            <div>
              <b>Speed <span>({pokemon.stats[5].base_stat})</span></b>
              <Meter percent={pokemon.stats[0].base_stat/100} />
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