import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function header() {
  return (
    <header className='header'>
        <div className='logo'>
            <Link to="/">NWS Materials</Link>
        </div>
        <ul>
            <li>
                <Link to="/materials">
                    <FaSignInAlt /> Matériels
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default header