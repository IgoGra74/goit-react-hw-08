import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const RegistrationPage = () => {
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
        /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
        "Invalid phone number format (e.g., 555-56-23)"
      ),
  });

  const onSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    onAddContact(newContact);
    actions.resetForm();
  };
  return (
    <div>
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
            <Field
              className={css.field}
              type="text"
              id="number"
              name="number"
            />
            <ErrorMessage name="number" component="div" />
          </div>
          <button className={css.addContact} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;
