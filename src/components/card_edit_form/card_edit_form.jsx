import React, { memo, useRef } from "react";
import styles from "./card_edit_form.module.css";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";

const CardEditForm = memo(({ card, deletCard, amendCard }) => {
  const { id, name, company, theme, title, email, message, fileName, fileURL } =
    card;
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSumit = (e) => {
    e.preventDefault();
    deletCard(id);
  };
  const onChange = (key) => {
    const card = {
      id: id,
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value,
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: "",
      fileURL: "",
    };
    amendCard(card);
  };
  return (
    <form className={styles.form} action="">
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        defaultValue={name}
        onChange={onChange}
      />
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        value={company}
        readOnly
      />
      <select
        ref={themeRef}
        className={styles.select}
        name="theme"
        value={theme}
        readOnly
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
        value={title}
        readOnly
      />
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        value={email}
        readOnly
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        value={message}
        readOnly
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name={"Delete"} onClick={onSumit} />
    </form>
  );
});

export default CardEditForm;
