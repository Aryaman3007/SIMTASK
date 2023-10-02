import React , {useState} from 'react'
import { Link } from 'react-router-dom';
import "./header.css"
import Lo from "../../images/footgen-logo.png"

const Header = () => {
  const [isMobile,setIsMobile] = useState(false)

  return (
    <div className='h'>
      <div className="h-left">
        <img src={Lo} alt="" className="logo" />
      </div>
      <div className="h-middle">
        <ul className={isMobile? "nav-links" : "navbar-list"}>

          <li className="navbar-item">
            <Link to="/header" className="navbar-link">HOME</Link>
          </li>

          <li className="navbar-item">
            <Link to="/main" className="navbar-link">PRODUCTS</Link>
          </li>

          <li className="navbar-item">
            <Link to="/bestseller" className="navbar-link">SHOP</Link>
          </li>

          <li className="navbar-item">
            <Link to="/footer" className="navbar-link">SALE</Link>
          </li>

          <li className="navbar-item">
            <Link to="/footer" className="navbar-link">CONTACT</Link>
          </li>

        </ul>

      </div>
      <div className="h-right">
        <ion-icon name="search-outline" aria-hidden="true" />
        <ion-icon name="person-outline" aria-hidden="true" />
        <ion-icon name="heart-outline" aria-hidden="true" />
        <ion-icon name="bag-outline" aria-hidden="true" />
      </div>

      <button className="nav-open-btn"
        onClick={() => setIsMobile(!isMobile)}
        >
            {isMobile? 
            (<ion-icon name="close" />):
            (<ion-icon name="menu-outline"/>)
            }
        </button>

    </div>
  )
}

export default Header