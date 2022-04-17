import React, { useEffect, useState, memo } from "react";
import styles from "./maker.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import { useNavigate } from "react-router-dom";

const Maker = memo(({ databaseService, authService, FileInput }) => {
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState();

  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };
  useEffect(() => {
    authService.onAuthChanged((user) => {
      user ? setUserId(user.uid) : navigate("/");
    });
  });

  useEffect(() => {
    databaseService.storeCards(`${userId}`, cards);
  }, [cards]);

  const addOrAmendCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deletCard = (id) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}></Header>
      <main className={styles.main}>
        <Editor
          cards={cards}
          addOrAmendCard={addOrAmendCard}
          deletCard={deletCard}
          FileInput={FileInput}
        />
        <Preview cards={cards} />
      </main>
      <Footer></Footer>
    </section>
  );
});

export default Maker;
