import React, { useEffect, useState, useCallback } from "react";
import styles from "./maker.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import { useNavigate, useLocation } from "react-router-dom";

const Maker = ({ databaseService, authService, FileInput }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location?.state;

  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(locationState && locationState.id);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = databaseService.syncCards(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId, databaseService]);

  useEffect(() => {
    authService.onAuthChanged((user) => {
      user ? setUserId(user.uid) : navigate("/");
    });
  }, [authService, navigate]);

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  const addOrAmendCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    databaseService.saveCards(userId, card);
  };

  const deletCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    databaseService.removeCards(userId, card);
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
};

export default Maker;
