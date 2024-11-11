import { selectFilteredContacts } from "../../redux/contactsSlice";
import { Contact } from "../Contact/Contact";
import { useSelector } from "react-redux";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
