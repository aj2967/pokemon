import loader from '../assets/squirtle.svg'
import rect from '../assets/rect.svg'
import eclipse from '../assets/eclipse.svg'

const Loader = () => {
  return (
    <div className='loader'>
        <img src={eclipse} alt="Loading..." />
        {/* <img src={rect} alt="rect" /> */}
        {/* <object className='loader-svg' data={loader} type="image/svg+xml"></object> */}
    </div>
  )
}

export default Loader