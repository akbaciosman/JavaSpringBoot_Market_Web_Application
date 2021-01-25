import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(props) {

    const openMenu = () => {
        document.querySelector(".sidebar").classList.add("open");
      }
    
      const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open");
      }
    

    return (
        <div>
            <header className="header">
          <div className="brand">
            <i className="fa fa-bars" onClick={openMenu}></i>
            <Link to={"/"}>  Mopaş</Link>
          </div>

          <div className="search-bar">
            <i className="fa fa-search" aria-hidden="true" ></i>
            <input type="text" className="search" placeholder="Search.." />
            <input type="submit" className="corner" value="Search" />
          </div>

          <div className="header-links">
            <a className="fa fa-shopping-cart" href="cart.html">Cart</a>
            <i>         </i>
            <Link className="fa fa-sign-in" to={"/login"}   >  Sign In</Link>

          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories <i className="fa fa-window-close" onClick={closeMenu}></i></h3>

          <ul>
            <li>
              <a href="index.html">Sebze & Meyve</a>
            </li>
            <li>
              <a href="index.html">Gıda & Şekerleme</a>
            </li>
          </ul>
        </aside>
        </div>
    )
}

export default  Navbar;