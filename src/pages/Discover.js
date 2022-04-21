import { useState, useEffect, useRef } from "react";
import Loader from "../components/Loader";
import PokemonCard from "../components/PokemonCard";
import { BiSearchAlt } from 'react-icons/bi';

const Discover = () => {
      // Api Website: https://pokeapi.co/?ref=hackernoon.com
    const [id, setId] = useState(25);
    const [loaded, setLoaded] = useState(false);
    const [pokemon, setPokemon] = useState({});
    const [bio, setBio] = useState([])
    const [ability, setAbility] = useState();
    const [inputValue, setInputValue] = useState('');

    const inputRef = useRef();
    
    const apiData = {
        url: 'https://pokeapi.co/api/v2/',
        type: 'pokemon'
    }
    
    const { url, type } = apiData;
    const idUrl = `${url}${type}/${id}`;
    const nameUrl = `${url}${type}/${inputValue}`;

    useEffect(() => {
    setLoaded(false);
    
    fetch(idUrl)
        .then(data => {
            return data.json()
        })
        .then(pokemon => {
            setPokemon(pokemon)
            handleSpecies(id);
            handleAbility();
        })
        setTimeout(() => {
            setLoaded(true);
        }, 200);
    }, [id])
    
    const handleSpecies = async id => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const data = await res.json();

        // console.log(data);
        setBio(data);
    }

    const handleAbility = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    const createAbilityObject = async result => {
      const res = await fetch(result)
      const data = await res.json();

    //   console.log(ability)
      setAbility(data)
    }
    createAbilityObject(data.abilities[0].ability.url)
  }

    const handleRandom = () => {
        const randomNum = Math.floor(Math.random() * 898);
        setId(randomNum);
        // console.log(randomNum);
    }

    const handleSearch = (e, inputValue) => {
        e.preventDefault();

        fetch(nameUrl)
        .then(data => {
            return data.json()
        })
        .then(pokemon => {
            setPokemon(pokemon)
            const name = pokemon.name;
            setId(pokemon.id)
            console.log(pokemon);
            handleSpecies(id);
            handleAbility();

        })
        
        setLoaded(true);

        console.log(inputValue);
        inputRef.current.value = '';
    }

  return (
    <div className="discover-container">
        <div className="input-container">
            <button className="btn" onClick={handleRandom}>Discover Pokemon</button>
            
            <h4 className="sidelines"><span className="dashes">Or</span></h4>
            
            <form onSubmit={(e) => handleSearch(e, inputValue)}>
                <input 
                    onChange={e => setInputValue(e.target.value.toLowerCase())} 
                    placeholder="Search By Name/No."
                    ref={inputRef}
                ></input>
                <button type="submit"><BiSearchAlt /></button>
            </form>
        </div>

        <div className="discover-result">
            <h1>Pokemon #{pokemon?.id}</h1>
            {!loaded ? (
            <Loader />
            ) : (
                <PokemonCard pokemon={pokemon} bio={bio} ability={ability} />
            )}
        </div>
      </div>
  )
}


export default Discover