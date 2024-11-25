import clsx from "clsx";
import styles from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";

const buildCssClasses = ({ isActive }) =>
  clsx(styles.link, isActive && styles.active);

const AuthNav = () => {
  return (
    <div className={styles.authNav}>
      <NavLink to="/register" className={buildCssClasses}>
        Register
      </NavLink>
      <NavLink to="/login" className={buildCssClasses}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
