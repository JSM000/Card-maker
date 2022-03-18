import React from "react";
import styles from "./login.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";

const Login = (props) => {
  return (
    <section className={styles.section}>
      <Header />
      <div className={styles.login}>
        <span>Login</span>
        <button>Google</button>
        <button>Github</button>
      </div>
      <Footer />
    </section>
  );
};

export default Login;
