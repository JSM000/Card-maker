import React, { memo } from "react";
import styles from "./editor.module.css";
import CardEditForm from "../card_edit_form/card_edit_form";
import CardAddForm from "../card_add_form/card_add_form";

const Editor = memo(
  ({ loading, cards, addCard, deletCard, amendCard, setImg, changeImg, image }) => {
    // const makeCard = () => {
    //   let array = [];
    //   for (const key in cards) {
    //     array.push(key);
    //   }
    //   console.log(array);
    //   return array;
    // };
    return (
      <section className={styles.editor}>
        <h1 className={styles.title}>Card Maker</h1>
        {/* {makeCard().map((key) => {
        return (
          <CardEditForm
            key={key}
            id={key}
            card={cards[key]}
            deletCard={deletCard}
            amendCard={amendCard}
          />
        );
      })} */}

        {Object.keys(cards).map((key) => (
          <CardEditForm
            loading={loading}
            key={key}
            card={cards[key]}
            deletCard={deletCard}
            amendCard={amendCard}
            setImg={setImg}
          />
        ))}
        <CardAddForm loading={loading} addCard={addCard} setImg={setImg} image={image} />
      </section>
    )
  }
);

export default Editor;
