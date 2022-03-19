import React, { useEffect } from "react";
import styles from "./maker.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useNavigate } from "react-router-dom";

const Maker = ({ authService }) => {
  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChanged((user) => !user && navigate("/"));
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}></Header>
      <main className={styles.main}></main>
      <Footer></Footer>
    </section>
  );
};

export default Maker;
