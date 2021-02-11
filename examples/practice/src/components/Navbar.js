import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { FaBars , FaTimes} from 'react-icons/fa'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    window.removeEventListener('resize', showButton)
  }, []);


  return (
    <>
    <div className="navbar bg-dark">
      <div className="container">
        <nav className="flex">
          <Link to="/" exact className="logo text-md">
            MR
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars/>}
          </div>
          <ul className={click ? 'menu-items flex active' :' menu-items flex' }>
            <li>
              <Link to='/' exact className=' ml-1 nav-links'>
              Home
              </Link>
            </li>
            <li>
              <Link to='/about' className='ml-1 nav-links'>
              About
              </Link>
            </li>
            <li>
              <Link to='/contact' className='ml-1 nav-links'>
              Contact
              </Link>
            </li>
            <li>
              <button className='btn ml-1  btn-secondary btn-round'>Sign UP</button>
            </li>
          </ul>
        </nav>
      </div>
      </div>
    </>
  )
}

export default Navbar
