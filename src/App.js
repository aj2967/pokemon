import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Generate from './pages/Generate';
import Pokemon from './components/Pokemon';
import logo from './logo.svg';
import Pokedex from './pages/Pokedex';

function App() {
  // Api Website: https://pokeapi.co/?ref=hackernoon.com

  return (
    <div className="App">
      <Header />
      <div className="body-container">
        <Routes>
          <Route exact path='/pokemon' element={<Home />} />
          <Route path='/pokemon/pokedex' element={<Pokedex />} />
          <Route path='/pokemon/pokedex/:id' element={<Pokemon />} />
          <Route path='/pokemon/generate' element={<Generate />} />
        </Routes>
      </div>
    </div>

    /*
      create header
        - pokedex (clickable with pokemon.id)
        - view pokemon
        - discover

      pokedex
        - image front
        - name
      
      discover pokemon
        - search pokemon
        - random pokemon

    */
  );
}

export default App;
