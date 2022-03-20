import React, { useEffect, useState } from "react";
import styles from "./maker.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import { useNavigate } from "react-router-dom";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Bob",
      company: "Samsung",
      theme: "dark",
      title: "ProductManager",
      email: "dndls000@naver.com",
      message: "Don't forget to code your dream",
      fileName: "Bob",
      fileURL: "images/default_logo.png",
    },
    {
      id: "2",
      name: "Bob2",
      company: "Samsung",
      theme: "colorful",
      title: "ProductManager",
      email: "dndls000@naver.com",
      message: "Don't forget to code your dream",
      fileName: "Bob",
      fileURL: "images/default_logo.png",
    },
    {
      id: "3",
      name: "Bob3",
      company: "Samsung",
      theme: "light",
      title: "ProductManager",
      email: "dndls000@naver.com",
      message: "Don't forget to code your dream",
      fileName: "Bob",
      fileURL: null,
    },
  ]);

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
      <main className={styles.main}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </main>
      <Footer></Footer>
    </section>
  );
};

export default Maker;
