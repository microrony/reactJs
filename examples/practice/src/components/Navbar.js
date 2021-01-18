import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav className="navbar">
          <Link to="/" exact className="logo text-lg">
            MR
          </Link>
          {/* <div className="menu-icon">
            <FaBars />
          </div> */}
          <ul>
            <li>
              <Link to='/' exact className='nav-links'>
              Home
              </Link>
            </li>
            <li>
              <Link to='/about' className='nav-links'>
              About
              </Link>
            </li>
            <li>
              <Link to='/contact' className='nav-links'>
              Contact
              </Link>
            </li>
            <li>
              <button className='btn btn-dark btn-round'>Sign UP</button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar
