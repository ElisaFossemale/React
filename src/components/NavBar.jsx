import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container">
      <div>
        <NavLink to="/">
          <h1 className="brandTitle h1Nav">Bienvenidos al E-shop </h1>
        </NavLink>
      </div>
      <div>
        <nav>
          <ul className="ulNav">
            <li>
              <NavLink to="/category/men">Hombres</NavLink>
            </li>
            <li>
              <NavLink to="/category/women">Mujeres</NavLink>
            </li>
            <li>
              <CartWidget
                src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
                alt="cart"
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
