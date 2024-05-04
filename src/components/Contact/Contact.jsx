import css from "./Contact.module.css";
import { BsPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setCurrentContact } from "../../redux/contacts/slice";

const Contact = ({ name, number, id, openModalDelete }) => {
  const currentContact = { name, number, id };

  const dispatch = useDispatch();

  const contactBtnDelete = () => {
    dispatch(setCurrentContact(currentContact));

    openModalDelete();
  };
  const onDelete = () => {
    contactBtnDelete(id);
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
      <button className={css.delete} type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
