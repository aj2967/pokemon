import { useState, useEffect, useRef } from "react";
import Loader from "../components/Loader";
import PokemonCard from "../components/PokemonCard";
import { BiSearchAlt } from 'react-icons/bi';

const Discover = () => {
      // Api Website: https://pokeapi.co/?ref=hackernoon.com
    const [id, setId] = useState(25);
    const [loaded, setLoaded] = useState(false);
    const [pokemon, setPokemon] = useState({});
    const [inputValue, setInputValue] = useState('');

    const inputRef = useRef();
    
    const apiData = {
        url: 'https://pokeapi.co/api/v2/',
        type: 'pokemon'
    }
    
    const { url, type } = apiData;
    const idUrl = `${url}${type}/${id}`;
    const nameUrl = `${url}${type}/${inputValue}`;
    
    // const [newFetch, setNewFetch] = useState(idUrl);

    useEffect(() => {
    setLoaded(false);
    
    fetch(idUrl)
        .then(data => {
            return data.json()
        })
        .then(pokemon => {
            setPokemon(pokemon)
            console.log(pokemon);
        })
        setTimeout(() => {
            setLoaded(true);
        }, 300);
    }, [id])
    

    const handleRandom = () => {
        const randomNum = Math.floor(Math.random() * 898);
        setId(randomNum);
        // setNewFetch(idUrl);
        console.log(randomNum);
    }

    const handleSearch = (e, inputValue) => {
        e.preventDefault();

        fetch(nameUrl)
        .then(data => {
            return data.json()
        })
        .then(pokemon => {
            setPokemon(pokemon)
            console.log(pokemon);
        })
        setTimeout(() => {
            setLoaded(true);
        }, 700);

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
                    placeholder="Search by name"
                    ref={inputRef}
                ></input>
                <button type="submit"><BiSearchAlt /></button>
            </form>
        </div>

        <div className="discover-result">
            <h1>Pokemon #{pokemon.id}</h1>
            {!loaded ? (
            <Loader />
            ) : (
                <PokemonCard pokemon={pokemon}/>
            )}
        </div>
      </div>
  )
}


export default Discover