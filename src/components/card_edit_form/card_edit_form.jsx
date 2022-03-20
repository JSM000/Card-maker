import React, { memo } from "react";
import styles from "./card_edit_form.module.css";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";

const CardEditForm = memo(({ card }) => {
  const { name, company, theme, title, email, message, fileName, fileURL } =
    card;
  const onSumit = () => {};
  return (
    <form className={styles.form} action="">
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        readOnly
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
        readOnly
      />
      <select className={styles.select} name="theme" value={theme} readOnly>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        value={title}
        readOnly
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        value={email}
        readOnly
      />
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
        readOnly
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name={"Delete"} onclick={onSumit} />
    </form>
  );
});

export default CardEditForm;
