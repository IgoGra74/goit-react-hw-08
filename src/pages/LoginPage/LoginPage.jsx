import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./LoginPage.module.css";

const initialValues = {
  email: "",
  password: "",
};

const loginUserSchema = Yup.object().shape({
  email: Yup.string()
    .required("Required")
    .email("You must enter valid email address!"),
  password: Yup.string()
    .required("Password is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must not exceed 50 characters"),
});

const LoginPage = () => {
  const handleSubmit = (values, actions) => {
    // const newContact = {
    //   // id: nanoid(),
    //   name: values.name,
    //   number: values.number,
    // };
    // onAddContact(newContact);
    actions.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={loginUserSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className={css.group}>
            <label htmlFor="email" className={css.label}>
              Email
            </label>
            <Field
              className={css.field}
              type="email"
              id="email"
              name="email"
              placeholder="ihor@i.ua"
            />
            <ErrorMessage name="email" component="div" />
          </div>
          <div className={css.group}>
            <label htmlFor="password" className={css.label}>
              Password
            </label>
            <Field
              className={css.field}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage name="password" component="div" />
          </div>
          <button className={css.addLogin} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
