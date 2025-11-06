//css
import "./Header.css";

//NavLink
import { NavLink } from "react-router-dom";


export default function Header() {
 
  return (
    <>
      <header className="header">
        <div className="logo-link-container">
          <div className="logo">Muhammad Umar</div>
          <nav className="nav-links">
            <NavLink to={"/"}>
              <li>Home</li>
            </NavLink>
            <NavLink to={"/About"}>
              <li>About</li>
            </NavLink>
            <NavLink to={"/Contact"}>
              <li>Contact</li>
            </NavLink>
              <NavLink to={"/Services"}>
              <li>Services</li>
            </NavLink>
              <NavLink to={"/Redux"}>
              <li>Redux</li>
            </NavLink>
           
          </nav>
        </div>

        <div className="search-box-container">
          <div className="search-box">
            <input type="text" placeholder="Search..." />
           <button className="button-logout">Log out</button>
          </div>
        </div>
      </header>
    </>
  );
}
