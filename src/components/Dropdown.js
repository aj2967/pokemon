import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Dropdown = ({ value, setValue, options }) => {
    const [isActive, setIsActive] = useState(false);

  return (
    <div className='dropdown'>
        <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>
            <b>
                {value}
            </b>
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
                                setValue(option)
                                setIsActive(false)
                            }}>
                            {option}
                        </div>
                    ))}
                </div>
            )
        }
    </div>
  )
}

export default Dropdown