import { useSelector } from "react-redux";
import { selectIsSignedIn } from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import css from "./AppBar.module.css";

const AppBar = () => {
  const isSignedIn = useSelector(selectIsSignedIn);
  return (
    <div>
      <header className={css.header}>
        <Navigation />
        {isSignedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </div>
  );
};

export default AppBar;
