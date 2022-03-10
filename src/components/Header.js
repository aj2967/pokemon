import pokemonTitle from '../assets/images/pokemon-title.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <Link to="/pokemon/pokedex">Pokedex</Link>
        <div>
          <Link className='logo' to="/pokemon"><img src={pokemonTitle} alt="Pokemon" /></Link>
        </div>
        <Link className='link-discover' to="/pokemon/discover">Discover</Link>
      </div>
    </div>
  )
}

export default Header