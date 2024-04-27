import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import css from "./AppBar.module.css";

const AppBar = () => {
  //   const { isLoggedIn } = useSelector(selectIsLoggedIn);
  return (
    <div>
      <header className={css.header}>
        <Navigation />
        <UserMenu /> : <AuthNav />
      </header>
    </div>
  );
};

export default AppBar;
