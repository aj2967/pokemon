import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Generate from './pages/Generate';
import Pokemon from './components/Pokemon';
import logo from './logo.svg';

function App() {
  // Api Website: https://pokeapi.co/?ref=hackernoon.com

  return (
    <div className="App">
      <Header />
      <div className="body-container">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/generate' element={<Generate />} />
          <Route path='/pokemon/:id' element={<Pokemon />} />
        </Routes>
      </div>
    </div>

    /*
      create header
        - pokedex (clickable with pokemon.id)
        - view pokemon
        - generate random pokemon

      pokedex
        - image front
        - name
        - 
    */
  );
}

export default App;
