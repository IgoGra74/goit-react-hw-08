import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { apiAddContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const dispatch = useDispatch();

  const onAddContact = (newContact) => {
    dispatch(apiAddContact(newContact));
  };

  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must not exceed 50 characters"),
    number: Yup.string()
      .required("Number is required")
      .matches(
        /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
        "Invalid phone number format (e.g., 555-562-2312)"
      ),
  });

  const onSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    onAddContact(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className={css.group}>
          <label htmlFor="name" className={css.label}>
            Name
          </label>
          <Field className={css.field} type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div className={css.group}>
          <label htmlFor="number" className={css.label}>
            Number
          </label>
          <Field className={css.field} type="text" id="number" name="number" />
          <ErrorMessage name="number" component="div" />
        </div>
        <button className={css.addContact} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
