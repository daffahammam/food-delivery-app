import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import "./Navbar.css";

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false); // state toggle menu
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="navbar">
      {/* Logo */}
      <Link to={'/'}><img src={assets.logo} alt="Logo" className="logo" /></Link>

      {/* Desktop Menu */}
      <ul className="navbar-menu">
        <Link
          to={'/'}
          href="#header"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>

      {/* Right Side */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" className="search-icon" />
        <div className="navbar-search-icon">
          <Link to="/cart"><img src={assets.basket_icon} alt="Basket" className="basket-icon" /></Link>
          <div className={getTotalCartAmount()===0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>

        {/* Hamburger */}
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="mobile-menu">
          <Link to='/' onClick={() => { setMenu("home"); setIsOpen(false); }} className={menu==="home"?"active":""}>home</Link>
          <a href='#explore-menu' onClick={() => { setMenu("menu"); setIsOpen(false); }} className={menu==="menu"?"active":""}>menu</a>
          <a  href='#app-download' onClick={() => { setMenu("mobile-app"); setIsOpen(false); }} className={menu==="mobile-app"?"active":""}>mobile-app</a>
          <a href='#footer' onClick={() => { setMenu("contact-us"); setIsOpen(false); }} className={menu==="contact-us"?"active":""}>contact us</a>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
