import React, { useRef, memo } from "react";
import styles from "./card_add_form.module.css";
import ImageFileInput from "../image_file_input/image_file_input";
import Button from "../button/button";

const CardAddForm = memo(({ addCard, setImg, image, loading }) => {
  const inputRef = useRef([]);
  const onSubmit = (e) => {
    e.preventDefault();
    const card = {
      id: Date.now(),
      name: inputRef.current[0].value || "",
      company: inputRef.current[1].value || "",
      theme: inputRef.current[3].value,
      title: inputRef.current[4].value || "",
      email: inputRef.current[5].value || "",
      message: inputRef.current[6].value || "",
      fileName: image.imgName || "",
      fileURL: image.imgURL || "",
      loading: false
    };
    inputRef.current[7].reset();
    addCard(card, true);
  };

  return (
    <form
      ref={(el) => (inputRef.current[7] = el)}
      className={styles.form}
      action=""
    >
      <input
        className={styles.input}
        type="text"
        name="name"
        placeholder="Name"
        ref={(el) => (inputRef.current[0] = el)}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        placeholder="Company"
        ref={(el) => (inputRef.current[1] = el)}
      />
      <select
        className={styles.select}
        name="theme"
        ref={(el) => (inputRef.current[3] = el)}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        placeholder="Title"
        ref={(el) => (inputRef.current[4] = el)}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        placeholder="Email"
        ref={(el) => (inputRef.current[5] = el)}
      />
      <textarea
        className={styles.textarea}
        name="message"
        placeholder="Message"
        ref={(el) => (inputRef.current[6] = el)}
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput loading={loading} setImg={setImg} fileName={image.imgName} />
      </div>
      <Button name={"Add"} onClick={onSubmit} />
    </form>
  )
});

export default CardAddForm;
