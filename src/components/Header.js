import pokemonTitle from '../assets/images/pokemon-title.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <Link to="/pokedex">Pokedex</Link>
        <div>
          <Link className='logo' to="/"><img src={pokemonTitle} alt="Pokemon" /></Link>
        </div>
        <Link className='link-discover' to="/discover">Discover</Link>
      </div>
    </div>
  )
}

export default Header