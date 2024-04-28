import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <div className={css.wrapper}>
        <p className={css.username}>Welcome, {user.name}</p>
        <button type="button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
