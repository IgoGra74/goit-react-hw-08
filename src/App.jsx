// import ContactForm from "./components/ContactForm/ContactForm";
// import ContactList from "./components/ContactList/ContactList";
// import SearchBox from "./components/SearchBox/SearchBox";
// import css from "./App.module.css";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { apiGetContacts } from "./redux/contactsOps";

import { Suspense } from "react";
// import Navigation from "./components/Navigation/Navigation";
import Loader from "./components/Loader/Loader";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import ContactsPage from "./pages/ContactsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout/Layout";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(apiGetContacts());
  // }, [dispatch]);

  return (
    <div>
      {/* <Navigation /> */}
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>

      {/* <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div> */}
    </div>
  );
}

export default App;
