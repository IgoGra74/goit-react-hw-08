import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import css from "./ContactsPage.module.css";

const ContactsPage = () => {
  return (
    <div>
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </div>
  );
};

export default ContactsPage;
