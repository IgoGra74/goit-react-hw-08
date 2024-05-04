import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import css from "./ContactsPage.module.css";
import { useEffect } from "react";
import { apiGetContacts } from "../../redux/contacts/operations";
import { useState } from "react";
import ModalDelete from "../../components/ModalDelete/ModalDelete";
import { selectContacts } from "../../redux/contacts/selectors";

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  function openModalDelete() {
    setModalDeleteIsOpen(true);
  }

  function closeModalDelete() {
    setModalDeleteIsOpen(false);
  }
  return (
    <div>
      <div>
        <h1 className={css.title}>Phonebook</h1>

        <ContactForm />
        <SearchBox />
        <ContactList openModalDelete={openModalDelete} />
        <div>
          {Array.isArray(contacts) && contacts.length === 0 && (
            <p className={css.subtitle}>No contacts found</p>
          )}
        </div>
      </div>
      <ModalDelete
        onOpenButton={openModalDelete}
        isOpen={modalDeleteIsOpen}
        onRequestClose={closeModalDelete}
      />
    </div>
  );
};

export default ContactsPage;
