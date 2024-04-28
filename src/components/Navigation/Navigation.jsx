import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
import { selectIsSignedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  const isSignedIn = useSelector(selectIsSignedIn);
  return (
    <nav className={css.nav}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      {isSignedIn && (
        <NavLink className={buildLinkClass} to="/tasks">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
