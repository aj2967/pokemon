import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Dropdown = ({ selected, setSelected }) => {
    const [isActive, setIsActive] = useState(false);
    
    const options = ['All', 'Normal', 'Fighting', 'Flying', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel', 'Fire', 'Water', 'Grass', 'Electric', 'Psychic', 'Ice', 'Dragon', 'Dark', 'Fairy', 'Shadow'];

  return (
    <div className='dropdown'>
        <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>
            <b>{selected}</b>
            <span><MdOutlineKeyboardArrowDown /></span>
        </div>

        {
            isActive && (
                <div className="dropdown-content">
                    {options.map((option, i) => (
                        <div
                            key={i}
                            className="dropdown-item" 
                            onClick={e => {
                                setSelected(option)
                                setIsActive(false)
                            }}>
                            {option}
                        </div>
                    ))}
                    {/* <div className="dropdown-item">
                        Normal
                    </div>
                    <div className="dropdown-item">
                        Fighting
                    </div>
                    <div className="dropdown-item">
                        Flying
                    </div>
                    <div className="dropdown-item">
                        Poison
                    </div> */}
                </div>
            )
        }
    </div>
  )
}

export default Dropdown