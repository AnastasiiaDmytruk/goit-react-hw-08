import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../redux/auth/selectors"
import { apiLogoutUser } from "../../redux/auth/operations"
import styles from "./UserMenu.module.css"

const UserMenu = () => {
  const dispatch= useDispatch()
  const user= useSelector(selectUser)

  const handleLogout =()=>{
    dispatch(apiLogoutUser())
  }
  return (
    <div className={styles.userMenu}>
    <span className={styles.greeting}>Hello, {user.name}</span>
    <button type="button" onClick={handleLogout} className={styles.logoutBtn}>
      Logout
    </button>
  </div>
  )
}

export default UserMenu