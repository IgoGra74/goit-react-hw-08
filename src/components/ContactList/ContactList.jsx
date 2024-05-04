import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectError, selectIsLoading } from "../../redux/contacts/selectors";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useEffect } from "react";
import { apiGetContacts } from "../../redux/contacts/operations";
import { selectVisibleContacts } from "../../redux/filters/selectors";

const ContactList = ({ openModalDelete }) => {
  const dispatch = useDispatch();
  const isloading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  return (
    <div>
      <h2 className={css.titleList}>Your contacts list</h2>
      <ul className={css.contactList}>
        {isloading && <Loader />}
        {error && <ErrorMessage />}
        {visibleContacts.map((contact) => (
          <li className={css.contactListItem} key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
              openModalDelete={openModalDelete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
