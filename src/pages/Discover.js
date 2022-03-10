import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import PokemonCard from "../components/PokemonCard";

const Discover = () => {
      // Api Website: https://pokeapi.co/?ref=hackernoon.com
    const [id, setId] = useState(25);
    const [loaded, setLoaded] = useState(false);
    const [pokemon, setPokemon] = useState({});
    const [inputValue, setInputValue] = useState('');
    
    const apiData = {
        url: 'https://pokeapi.co/api/v2/',
        type: 'pokemon'
    }
    
    const { url, type } = apiData;
    const idUrl = `${url}${type}/${id}`;
    const nameUrl = `${url}${type}/${inputValue}`;
    
    const [newFetch, setNewFetch] = useState(idUrl);

    useEffect(() => {
    setLoaded(false);
    
    fetch(newFetch)
        .then(data => {
            return data.json()
        })
        .then(pokemon => {
            setPokemon(pokemon)
            console.log(pokemon);
        })
        setTimeout(() => {
            setLoaded(true);
        }, 1000);
    }, [id, newFetch])
    

    const handleRandom = () => {
        const randomNum = Math.floor(Math.random() * 898);
        setId(randomNum);
        setNewFetch(idUrl);
    }

    const handleSearch = (e, inputValue) => {
        e.preventDefault();
        setNewFetch(nameUrl);

        console.log(inputValue);
        setInputValue('');
    }

  return (
    <div className="discover-container">
        <div className="input-container">
            <button className="btn" onClick={handleRandom}>Discover New</button>
            
            <h4 className="sidelines"><span className="dashes">Or</span></h4>
            
            <form onSubmit={(e) => handleSearch(e, inputValue)}>
                <input onChange={e => setInputValue(e.target.value)} placeholder="Search by name"></input>
                <button type="submit">Search</button>
            </form>
        </div>

        <div className="discover-result">
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