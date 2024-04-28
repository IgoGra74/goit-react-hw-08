import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" className={buildLinkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={buildLinkClass}>
        Log in
      </NavLink>
    </div>
  );
};

export default AuthNav;
