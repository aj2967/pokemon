import { useState, useEffect } from "react";

const Generate = () => {
      // Api Website: https://pokeapi.co/?ref=hackernoon.com
    const [id, setId] = useState(25)
    const [pokemon, setPokemon] = useState({})
    const [loading, setLoading] = useState(false)

    const apiData = {
        url: 'https://pokeapi.co/api/v2/',
        type: 'pokemon'
    }

    const { url, type } = apiData;
    const apiUrl = `${url}${type}/${id}`;

    useEffect(() => {
        fetch(apiUrl)
            .then((data) => {
                return data.json()
            })
            .then((pokemon) => {
                // console.log(pokemon);
                setPokemon(pokemon)
            })
    }, [id])
    

        const handleRandom = () => {
            const randomNum = Math.floor(Math.random() * 898);
            console.log(randomNum);
            setId(randomNum);
        }

  return (
    <div className="">
        {/* <form>
            <input type="text" onSubmit={(e) => }/>
        </form> */}
        <button onClick={handleRandom}>Discover Pokemon</button>
        <div className="pokemon">
                    <h1>{pokemon.name}</h1>
                    {/* <img src={pokemon.sprites.front_default} alt="" />
                    <img src={pokemon.sprites.back_default} alt="" /> */}
        </div>
      </div>
  )
}


export default Generate