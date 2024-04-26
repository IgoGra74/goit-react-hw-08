import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from "../../redux/contactsSlice";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useEffect } from "react";
import { apiGetContacts } from "../../redux/contactsOps";

const ContactList = () => {
  const dispatch = useDispatch();
  const isloading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(apiGetContacts());
  }, [dispatch]);

  return (
    <div>
      <ul className={css.contactList}>
        {isloading && <Loader />}
        {error && <ErrorMessage />}
        {visibleContacts.map((contact) => (
          <li className={css.contactListItem} key={contact.id}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
