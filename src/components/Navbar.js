import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  // toggle burger menu change
  const updateMenu = () => {
      if(!isMenuClicked) {
          setBurgerClass("burger-bar clicked")
          setMenuClass("menu visible")
      }
      else {
          setBurgerClass("burger-bar unclicked")
          setMenuClass("menu hidden")
      }
      setIsMenuClicked(!isMenuClicked)
  }
  return (
    <div className="nav-return">
                <div id="box" className="lg:opacity-0 opacity-100">
            <div id="burger-house">
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </div>
            {/* Drop down menu */}
            {/* className="transition-all ease-in duration-500" */}
            <div className={menu_class}>
              <br />
              <Link to="/" onClick={updateMenu} className="menu-item-odd">Home</Link>
              <br />
              <br />
              <Link to="about" onClick={updateMenu} className="menu-item-even">About</Link>
              <br />
              <br />
              <Link to="login" onClick={updateMenu} className="menu-item-odd">Login</Link>
            </div>
        </div>







      
      <div className="burger-container">
        <div className="burger-menu">
          <div className="buger-line"></div>
          <div className="buger-line"></div>
          <div className="buger-line"></div>
        </div>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="login">Login</Link>
      </nav>
    </div>
  )
};

export default Navbar;