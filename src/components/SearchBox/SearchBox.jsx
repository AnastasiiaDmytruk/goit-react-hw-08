import { useDispatch, useSelector } from "react-redux";
import styles from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={(event) => {
            const action = changeFilter(event.target.value);
            dispatch(action);
          }}
          className={styles.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;
