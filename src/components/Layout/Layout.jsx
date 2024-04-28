// import { NavLink } from "react-router-dom";
// import clsx from "clsx";
// import css from "./Layout.module.css";
import AppBar from "../AppBar/AppBar";
import { Suspense } from "react";
import Loader from "../Loader/Loader";
// const buildLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
      {/* <header className={css.header}>
        <nav className={css.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/contacts" className={buildLinkClass}>
            Contacts
          </NavLink>
          <NavLink to="/register" className={buildLinkClass}>
            Register
          </NavLink>
          <NavLink to="/login" className={buildLinkClass}>
            Log in
          </NavLink>
        </nav>
      </header>
      <main>{children}</main> */}
    </div>
  );
};

export default Layout;
