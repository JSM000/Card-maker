import React, { useRef } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ setImg, fileName, id }) => {
  const inputRef = useRef();
  const onClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };
  const onImgChange = (e) => {
    setImg(e.target.files[0], id);
  };
  console.log(id);
  return (
    <>
      <input
        type="file"
        ref={inputRef}
        className={styles.imageInput}
        accept="image/*"
        onChange={onImgChange}
      />
      <button className={styles.imageBtn} onClick={onClick}>
        {fileName ? fileName : "Image"}
      </button>
      ;
    </>
  );
};

export default ImageFileInput;
