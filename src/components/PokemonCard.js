import Meter from './ProgressMeter';

const PokemonCard = (props) => {
    const pokemon = props.pokemon;
    console.log(pokemon);
    
    const style = `card ${pokemon.type}`

  return (
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

          <div className="detail detail-2">
            <h3>Stats</h3>
            <div>
              <b>Hp <span>({pokemon.stats[0].base_stat})</span></b>
              <Meter percent={pokemon.stats[0].base_stat/100} />
            </div>
            <div>
              <b>Attack <span>({pokemon.stats[1].base_stat})</span></b>
              <Meter percent={pokemon.stats[1].base_stat/100} />
            </div>
            <div>
              <b>Defence <span>({pokemon.stats[2].base_stat})</span></b>
              <Meter percent={pokemon.stats[2].base_stat/100} />
            </div>
            <div>
              <b>Special Attack <span>({pokemon.stats[3].base_stat})</span></b>
              <Meter percent={pokemon.stats[3].base_stat/100} />
            </div>
            <div>
              <b>Special Defence <span>({pokemon.stats[4].base_stat})</span></b>
              <Meter percent={pokemon.stats[4].base_stat/100} />
            </div>
            <div>
              <b>Speed <span>({pokemon.stats[5].base_stat})</span></b>
              <Meter percent={pokemon.stats[5].base_stat/100} />
            </div>
          </div>
        
          {/* <div className="detail detail-3">
            <h3>Abilities</h3>
            <div>
              <b>{pokemon.abilities[0].ability.name}</b>
              <p>Info:</p>
            </div>
            <div>
              <b>{pokemon.abilities[1].ability.name}</b>
              <p>Info:</p>
            </div>
          </div> */}

          <div className="detail detail-4">
            <h3>Sprites</h3>
            <div>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <img src={pokemon.sprites.back_default} alt={pokemon.name} />
              <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
              <img src={pokemon.sprites.back_shiny} alt={pokemon.name} />
            </div>
          </div>
        </div>
  )
}

export default PokemonCard