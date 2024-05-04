import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

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

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(login(values));
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

export default LoginForm;
