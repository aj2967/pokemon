import pokemonTitle from '../assets/images/pokemon-title.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <Link to="/">Pokedex</Link>
        <img src={pokemonTitle} alt="Pokemon" />
        <Link to="/generate">Generate</Link>
      </div>
    </div>
  )
}

export default Header