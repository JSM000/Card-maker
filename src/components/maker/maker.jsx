import React, { useEffect, useState, memo } from "react";
import styles from "./maker.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import { useNavigate } from "react-router-dom";

const Maker = memo(({ authService, FileInput }) => {
  const [cards, setCards] = useState({});
  const [image, setImage] = useState({});

  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };
  useEffect(() => {
    authService.onAuthChanged((user) => !user && navigate("/"));
  });

  const addOrAmendCard = (card, add) => {
    console.log(card);
    add && setImage({});
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

  const setImg = (id, fileName, url) => {
    console.log(url);
    id
      ? setCards((cards) => {
          const updated = { ...cards };
          const card = { ...updated[id] };
          card["fileName"] = fileName;
          card["fileURL"] = url;
          updated[id] = card;
          return updated;
        })
      : setImage({ fileName: fileName, url: url });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}></Header>
      <main className={styles.main}>
        <Editor
          cards={cards}
          addOrAmendCard={addOrAmendCard}
          deletCard={deletCard}
          setImg={setImg}
          FileInput={FileInput}
          image={image}
        />
        <Preview cards={cards} />
      </main>
      <Footer></Footer>
    </section>
  );
});

export default Maker;
