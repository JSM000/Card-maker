import React, { memo, useRef } from "react";
import styles from "./card_edit_form.module.css";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";

const CardEditForm = memo(({ id, card, deletCard, amendCard }) => {
  const { name, company, theme, title, email, message, fileName, fileURL } =
    card;
  // const nameRef = useRef();
  // const companyRef = useRef();
  // const themeRef = useRef();
  // const titleRef = useRef();
  // const emailRef = useRef();
  // const messageRef = useRef();

  const onSumit = (e) => {
    e.preventDefault();
    deletCard(card.id);
  };
  const onChange = (e) => {
    amendCard({ ...card, [e.currentTarget.name]: e.currentTarget.value });
  };
  return (
    <form className={styles.form} action="">
      <input
        //ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        //ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        value={company}
        onChange={onChange}
      />
      <select
        //ref={themeRef}
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
        //ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
        value={title}
        onChange={onChange}
      />
      <input
        //ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        value={email}
        onChange={onChange}
      />
      <textarea
        //ref={messageRef}
        className={styles.textarea}
        name="message"
        value={message}
        onChange={onChange}
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name={"Delete"} onClick={onSumit} />
    </form>
  );
});

export default CardEditForm;
