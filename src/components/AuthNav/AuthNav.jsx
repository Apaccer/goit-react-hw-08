import { NavLink } from "react-router-dom";
import { getNavLinkClassName } from "../Navigation/Navigation";
import css from "./AuthNav.module.css";
const AuthNav = () => {
  return (
    <div className={css.authNavContainer}>
      <NavLink className={getNavLinkClassName} to="/register">
        Register
      </NavLink>
      <NavLink className={getNavLinkClassName} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
