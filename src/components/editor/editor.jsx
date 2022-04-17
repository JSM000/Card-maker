import React, { memo } from "react";
import styles from "./editor.module.css";
import CardEditForm from "../card_edit_form/card_edit_form";
import CardAddForm from "../card_add_form/card_add_form";

const Editor = ({ cards, addOrAmendCard, deletCard, FileInput }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {Object.keys(cards).map((key) => (
        <CardEditForm
          key={key}
          card={cards[key]}
          deletCard={deletCard}
          amendCard={addOrAmendCard}
          FileInput={FileInput}
        />
      ))}
      <CardAddForm addCard={addOrAmendCard} FileInput={FileInput} />
    </section>
  );
};

export default Editor;
