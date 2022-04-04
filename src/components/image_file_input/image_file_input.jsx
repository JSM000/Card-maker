import React, { useRef } from "react";
import Spinner from "../spinner/spinner";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ id, cardLoading, loading, setImg, fileName }) => {
  const inputRef = useRef();
  const onClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };
  const onImgChange = (e) => {
    setImg(e.target.files[0], id);
  };
  return (
    <>
      <input
        type="file"
        ref={inputRef}
        className={styles.imageInput}
        accept="image/*"
        onChange={onImgChange}
      />
      <button className={`${styles.imageBtn} ${getStyles(fileName)}`} onClick={onClick}>
        {cardLoading || loading ? <Spinner/> : fileName ? fileName : "No file"}
      </button>
      ;
    </>
  );
};

function getStyles(fileName) {
  if(fileName) {
    return styles.pink
  } else{
    return
  }
}

export default ImageFileInput;
