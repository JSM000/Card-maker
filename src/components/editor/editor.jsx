import React, { memo } from "react";
import styles from "./editor.module.css";
import CardEditForm from "../card_edit_form/card_edit_form";
import CardAddForm from "../card_add_form/card_add_form";

const Editor = memo(({ cards, addCard, deletCard, amendCard }) => {
  const makeCard = () => {
    let array = [];
    for (const key in cards) {
      array.push(
        <CardEditForm
          key={key}
          id={key}
          card={cards[key]}
          deletCard={deletCard}
          amendCard={amendCard}
        />
      );
    }
    return array;
  };
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {/* {makeCard()} */}
      {Object.keys(cards).map((key) => (
        <CardEditForm
          key={key}
          id={key}
          card={cards[key]}
          deletCard={deletCard}
          amendCard={amendCard}
        />
      ))}
      <CardAddForm addCard={addCard} />
    </section>
  );
});

export default Editor;
