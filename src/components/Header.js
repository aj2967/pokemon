import pokemonTitle from '../assets/images/pokemon-title.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <Link to="/pokemon/pokedex">Pokedex</Link>
        <Link to="/pokemon"><img src={pokemonTitle} alt="Pokemon" /></Link>
        <Link to="/pokemon/generate">Generate</Link>
      </div>
    </div>
  )
}

export default Header