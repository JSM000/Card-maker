import React, { useEffect, useState, memo } from "react";
import styles from "./maker.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import { useNavigate } from "react-router-dom";

const Maker = memo(({ authService }) => {
  const [cards, setCards] = useState({});

  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };
  useEffect(() => {
    authService.onAuthChanged((user) => !user && navigate("/"));
  });

  const addOrAmendCard = (card) => {
    setCards((cards) => {
      const udated = { ...cards };
      udated[card.id] = card;
      return udated;
    });
  };

  const deletCard = (id) => {
    setCards((cards) => {
      const udated = { ...cards };
      delete udated[id];
      return udated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}></Header>
      <main className={styles.main}>
        <Editor
          cards={cards}
          addCard={addOrAmendCard}
          deletCard={deletCard}
          amendCard={addOrAmendCard}
        />
        <Preview cards={cards} />
      </main>
      <Footer></Footer>
    </section>
  );
});

export default Maker;
