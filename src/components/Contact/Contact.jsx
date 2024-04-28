import css from "./Contact.module.css";
import { BsPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { apiDeleteContact } from "../../redux/contacts/operations";

const Contact = ({ data }) => {
  const { name, number, id } = data;
  const dispatch = useDispatch();
  const onDeleteContact = (contactId) => {
    dispatch(apiDeleteContact(contactId));
  };
  const onDelete = () => {
    onDeleteContact(id);
  };

  return (
    <div className={css.contact}>
      <div>
        <p className={css.textName}>
          <span> </span>
          <BsPersonFill className={css.icon} />
          {name}
        </p>
        <p className={css.textNumber}>
          <BsFillTelephoneFill className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.delete} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
