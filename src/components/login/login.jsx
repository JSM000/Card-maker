import React from "react";
import styles from "./login.module.css";

const Login = (props) => {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <img src="images/logo.png" alt="logo" />
        Business Card Maker
      </header>
      <div className={styles.login}>
        <span>Login</span>
        <button>Google</button>
        <button>Github</button>
      </div>
      <footer className={styles.footer}>Code your dream</footer>
    </section>
  );
};

export default Login;
