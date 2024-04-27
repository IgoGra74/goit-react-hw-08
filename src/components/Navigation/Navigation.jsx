import { NavLink } from "react-router-dom";
// import clsx from "clsx";
import css from "./Navigation.module.css";

// const buildLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };

const Navigation = () => {
  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>

      <NavLink className={css.link} to="/tasks">
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
