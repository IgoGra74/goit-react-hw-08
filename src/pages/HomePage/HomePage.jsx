import HomePageImage from "../../components/images/contactSync_Pro.jpg";
import css from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={css.container}>
      <div>
        <img src={HomePageImage} alt="Sunset-contact" className={css.img} />
      </div>
      <div className={css.header}>
        <h1 className={css.title}>
          Welcome to our contact-saving application,
          <span> ContactSyncPro</span>!
        </h1>
        <p className={css.text}>
          We are delighted to welcome you to our convenient and secure service
          that helps you store your contacts in one place. The first step to
          start using our application is to register your account. Simply follow
          the on-screen instructions, enter the necessary information, and your
          account will be created. After successful registration, you will need
          to log in to the application using your credentials. Please remember
          your username and password for future access to your contacts.
        </p>
        <h2>Done!</h2>
        <p className={css.text}>
          Now you can start adding, editing, and managing your contacts in a
          simple and convenient way.
        </p>
        <h3>By: Ihor Hrabovskyi</h3>
      </div>
    </div>
  );
};

export default HomePage;
