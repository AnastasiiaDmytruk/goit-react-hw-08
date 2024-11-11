import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import { useEffect } from "react";
import { selectError, selectLoading } from "./redux/contactsSlice";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        {loading && !error && <b>Request in progress...</b>}
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}

export default App;
