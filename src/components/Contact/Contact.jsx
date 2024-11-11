import styles from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { IoCall } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { deleteContact } from "../../redux/contactsOps";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <IoPerson className={styles.icon} />
          <span className={styles.name}>{contact.name}</span>
        </div>
        <div className={styles.item}>
          <IoCall className={styles.icon} />
          <span className={styles.name}> {contact.number}</span>
        </div>
      </div>
      <button className={styles.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
