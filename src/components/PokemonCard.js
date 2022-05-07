import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Meter from './ProgressMeter';
import LoaderSmall from './LoaderSmall';

const PokemonCard = ({ pokemon, bio, ability }) => {
  // console.log(pokemon);
  // console.log(ability);
  
  const [isLoaded, setIsLoaded] = useState(false)
 
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 500);
  }, [])

  const ImgContainer = styled.div`
    background: linear-gradient(45deg, #e2e2e2, ${bio?.color?.name});
  `

  return (
    <div className='card'>
          <div className=" detail-bio">
            <ImgContainer className="img-container">
              <img src={pokemon?.sprites?.other?.home.front_default} alt={pokemon?.name} />
            </ImgContainer>

            <div className="detail detail-stats">
            <h3>Stats</h3>
            <div>
              <b>Hp <span>({pokemon?.stats[0]?.base_stat})</span></b>
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
          </div>

          <div className="detail detail-info">
            <h1>{pokemon?.name} <small>({pokemon?.types[0]?.type?.name})</small></h1>
            <div className='info-paragraph'>
              {
                bio.flavor_text_entries.filter(entry => entry?.language?.name?.includes('en') && entry?.version?.name?.includes('red'))?.map((filteredEntry) => (
                <blockquote>{filteredEntry?.flavor_text}</blockquote>
                ))
              }           
            </div>

            <div className="info">
              <div>
                <b>Base Experience:</b>
                <p>{pokemon.base_experience}</p>
              </div>
              <div>
                <b>Base Happiness:</b>
                <p>{bio?.base_happiness}</p>
              </div>
              <div>
                <b>Capture Rate:</b>
                <p>{bio?.capture_rate}</p>
              </div>
              <div>
                <b>Height:</b>
                <p>{pokemon.height}</p>
              </div>
              <div>
                <b>Weight:</b>
                <p>{pokemon.weight}</p>
              </div>
              <div>
                <b>Color:</b>
                <p>{bio?.color?.name}</p>
              </div>
              <div>
                <b>Egg Group:</b>
                <p>{bio?.egg_groups[0]?.name}</p>
              </div>
              <div>
                <b>Evolves From:</b>
                <p>{bio?.evolves_from_species?.name || 'Unknown'}</p>
              </div>
              <div>
                <b>Generation:</b>
                <p>{bio?.generation?.name}</p>
              </div>
              <div>
                <b>Growth Rate:</b>
                <p>{bio?.growth_rate?.name}</p>
              </div>
              <div>
                <b>Habitat:</b>
                <p>{bio?.habitat?.name || 'Unknown'}</p>
              </div>
              <div>
                <b>Shape:</b>
                <p>{bio?.shape?.name || 'Unknown'}</p>
              </div>
            </div>
          </div>

          <div className="detail detail-ability">
            <h3>Ability</h3>
            <div className='ability'>
              <b>{ability?.name}</b>
              <p>
                  {
                    !isLoaded ? (
                      <LoaderSmall />
                    ) : (
                    ability?.effect_entries?.filter(entry => entry?.language?.name?.includes('en'))?.map((filteredEntry) => (
                     filteredEntry?.effect
                      ))
                    )
                  }
              </p>
            </div>
          </div>

          <div className="detail detail-sprites">
            <h3>Shiny Version</h3>
            <div className='sprites'>
              <img src={pokemon?.sprites?.other.home.front_shiny} alt={pokemon?.name} />
              <img src={pokemon?.sprites?.front_shiny} alt={pokemon?.name} />
            </div>
          </div>
        </div>
  )
}

export default PokemonCard