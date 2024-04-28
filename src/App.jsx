// import ContactForm from "./components/ContactForm/ContactForm";
// import ContactList from "./components/ContactList/ContactList";
// import SearchBox from "./components/SearchBox/SearchBox";
// import css from "./App.module.css";
import { Suspense, lazy, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { apiGetContacts } from "./redux/contactsOps";

// import { Suspense } from "react";
// import Navigation from "./components/Navigation/Navigation";
// import Loader from "./components/Loader/Loader";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { useDispatch } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import Loader from "./components/Loader/Loader";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

// import RegistrationPage from "./pages/RegistrationPage";
// import LoginPage from "./pages/LoginPage";
// import ContactsPage from "./pages/ContactsPage";
// import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute>
                  <RegistrationPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute>
                  <LoginPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;

{
  /* <div>
  <h1 className={css.title}>Phonebook</h1>
  <ContactForm />
  <SearchBox />
  <ContactList />
</div>; */
}
