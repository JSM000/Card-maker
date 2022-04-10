import React, { memo } from "react";
import styles from "./card_edit_form.module.css";
import Button from "../button/button";

const CardEditForm = memo(
  ({ FileInput, card, deletCard, amendCard, setImg }) => {
    const { id, name, company, theme, title, email, message, fileName } = card;
    const onSumit = (e) => {
      e.preventDefault();
      deletCard(card.id);
    };
    const onChange = (e) => {
      amendCard({ ...card, [e.currentTarget.name]: e.currentTarget.value });
    };
    console.log("cardEditForm", card.id);
    return (
      <form className={styles.form} action="">
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          onChange={onChange}
        />
        <input
          className={styles.input}
          type="text"
          name="company"
          value={company}
          onChange={onChange}
        />
        <select
          className={styles.select}
          name="theme"
          value={theme}
          onChange={onChange}
        >
          <option value="light">light</option>
          <option value="dark">dark</option>
          <option value="colorful">colorful</option>
        </select>
        <input
          className={styles.input}
          type="text"
          name="title"
          value={title}
          onChange={onChange}
        />
        <input
          className={styles.input}
          type="text"
          name="email"
          value={email}
          onChange={onChange}
        />
        <textarea
          className={styles.textarea}
          name="message"
          value={message}
          onChange={onChange}
        ></textarea>
        <div className={styles.fileInput}>
          <FileInput id={id} fileName={fileName} setImg={setImg} />
        </div>
        <Button name={"Delete"} onClick={onSumit} />
      </form>
    );
  }
);

export default CardEditForm;
