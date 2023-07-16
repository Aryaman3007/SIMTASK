import React , {useState} from 'react'
import "./header.css"
import Lo from "../images/footgen-logo.png"

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
            <a href="/#" className="navbar-link">HOME</a>
          </li>

          <li className="navbar-item">
            <a href="/#" className="navbar-link">PRODUCTS</a>
          </li>

          <li className="navbar-item">
            <a href="/#" className="navbar-link">SHOP</a>
          </li>

          <li className="navbar-item">
            <a href="/#" className="navbar-link">SALE</a>
          </li>

          <li className="navbar-item">
            <a href="/#" className="navbar-link">CONTACT</a>
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