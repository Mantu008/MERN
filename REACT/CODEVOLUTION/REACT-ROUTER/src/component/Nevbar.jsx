import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

function Nevbar() {
  const auth = useAuth();
  return (
    <nav id="nav">
      <NavLink to="/" className="Link">
        Home
      </NavLink>

      <NavLink to="/order" className="Link">
        Order
      </NavLink>

      <NavLink to="/about" className="Link">
        About
      </NavLink>

      <NavLink to="/users" className="Link">
        Users
      </NavLink>

      <NavLink to="/products" className="Link">
        Products
      </NavLink>

      <NavLink to="/profile" className="Link">
        Profile
      </NavLink>
      {!auth.user && (
        <NavLink to="/login" className="Link">
          Login
        </NavLink>
      )}
    </nav>
  );
}

export default Nevbar;
