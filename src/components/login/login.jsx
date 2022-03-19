import React, { useEffect } from "react";
import styles from "./login.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useNavigate } from "react-router-dom";

const Login = ({ authService }) => {
  const navigate = useNavigate();
  const goToMaker = (userId) => {
    navigate("/maker", { state: { id: userId } });
  };

  const onLogin = (e) => {
    authService //
      .login(e.currentTarget.textContent)
      .then((result) => {
        goToMaker(result.user.uid);
      });
  };

  useEffect(() => {
    authService.onAuthChanged((user) => {
      user && goToMaker(user.uid);
    });
  });

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
