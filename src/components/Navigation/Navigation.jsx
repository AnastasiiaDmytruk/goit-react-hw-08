import clsx from "clsx";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserIsLoggedIn } from "../../redux/auth/selectors";

const buildCssClasses = ({ isActive }) =>
  clsx(styles.link, isActive && styles.active);

const Navigation = () => {
    const isLoggedIn=useSelector(selectUserIsLoggedIn)
  return (
    <div className={styles.navbar}>
      <NavLink  className={buildCssClasses} to="/">
        Home
      </NavLink>
      {isLoggedIn && <NavLink to="/contacts"/> }
    </div>
  );
};

export default Navigation;
