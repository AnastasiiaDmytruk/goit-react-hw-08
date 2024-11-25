import { useDispatch, useSelector } from "react-redux";
import { selectContact } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";

const ContactsPage = () => {
  const contact = useSelector(selectContact);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>PhoneBook</h1>
      <ContactForm />
      <SearchBox/>
      {contact.length > 0 ? (
        <ContactList />
      ) : (
        <p>There are no contacts in your phonebook yet!</p>
      )}
    </div>
  );
};

export default ContactsPage;
