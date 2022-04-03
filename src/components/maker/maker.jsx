import React, { useEffect, useState, memo } from "react";
import styles from "./maker.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import { useNavigate } from "react-router-dom";

const Maker = memo(({ authService, imageService }) => {
  const [cards, setCards] = useState({});
  const [image, setImage] = useState({});

  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };
  useEffect(() => {
    authService.onAuthChanged((user) => !user && navigate("/"));
  });

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

  const setImg = (file, id) => {
    imageService
      .upload(file)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(id);
        if (id) {
          const updated = { ...cards };
          updated[id]["fileURL"] = data.url;
          return updated;
        } else {
          const updated = { imgName: file.name, imgURL: data.url };
          setImage(updated);
        }
      });
  };

  const changeImg = () => {};

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}></Header>
      <main className={styles.main}>
        <Editor
          cards={cards}
          addCard={addOrAmendCard}
          amendCard={addOrAmendCard}
          deletCard={deletCard}
          setImg={setImg}
          image={image}
        />
        <Preview cards={cards} />
      </main>
      <Footer></Footer>
    </section>
  );
});

export default Maker;
