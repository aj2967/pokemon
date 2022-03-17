import { useEffect } from "react";
import Hero from "../components/Hero"

const Home = () => {

    const idUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10';
    
  useEffect(() => {
    fetch(idUrl)
        .then(data => {
            return data.json()
        })
        .then(pokemon => {
            console.log(pokemon)
        })
    }, [])

  return (
    <div className="home-container">
      <div className="background-image"></div>
      <Hero />
    </div>
  )
}

export default Home