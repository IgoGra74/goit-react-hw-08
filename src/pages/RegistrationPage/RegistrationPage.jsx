import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./RegistrationPage.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const registerUserSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must not exceed 50 characters"),
  email: Yup.string()
    .required("Required")
    .email("You must enter valid email address!"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Name must be at least 8 characters")
    .max(50, "Name must not exceed 50 characters"),
});
const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);

    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={registerUserSchema}
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
          </div>{" "}
          <div className={css.group}>
            <label htmlFor="name" className={css.label}>
              Name
            </label>
            <Field
              className={css.field}
              type="text"
              id="name"
              name="name"
              placeholder="Ihor Horoshko"
            />
            <ErrorMessage name="name" component="div" />
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
          <button className={css.addRegister} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;
