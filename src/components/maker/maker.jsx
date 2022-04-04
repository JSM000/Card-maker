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
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };
  useEffect(() => {
    authService.onAuthChanged((user) => !user && navigate("/"));
  });

  const addOrAmendCard = (card, add) => {
    add && setImage({})
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

  const setImg = async (file, id) => {
    id
      ? setCards((cards) => {
          const updated = { ...cards };
          const card = updated[id];
          card["loading"] = true;
          updated[id] = card;
          return updated;
        })
      : setLoading(true);
    await imageService
      .upload(file)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (id) {
          setCards((cards) => {
            const updated = { ...cards };
            const card = { ...updated[id] };
            card["fileURL"] = data.url;
            card["fileName"] = file.name;
            updated[id] = card;
            return updated;
          });
        } else {
          const updated = { imgName: file.name, imgURL: data.url };
          setImage(updated);
        }
      });
    id
      ? setCards((cards) => {
          const updated = { ...cards };
          const card = updated[id];
          card["loading"] = false;
          updated[id] = card;
          return updated;
        })
      : setLoading(false);
  };

  const changeImg = () => {};

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}></Header>
      <main className={styles.main}>
        <Editor
          loading={loading}
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
