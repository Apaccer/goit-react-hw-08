import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";
const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={css.userMenu}>
      <span className={css.userName}>Hello, {user.name}!</span>
      <button className={css.logOutBtn} onClick={onLogout} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
