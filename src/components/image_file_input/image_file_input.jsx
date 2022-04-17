import React, { useRef, useState } from "react";
import Spinner from "../spinner/spinner";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ id, fileName, setImg, imageService }) => {
  const [loading, setLoading] = useState();
  const inputRef = useRef();

  const onClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  const onImgChange = async (e) => {
    setLoading(true);
    const file = e.target.files[0];
    const imageResult = await imageService.upload(file);
    setImg({
      fileName: imageResult.original_filename,
      fileURL: imageResult.url,
    });
    setLoading(false);
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
      <button
        className={`${styles.imageBtn} ${getStyles(fileName)}`}
        onClick={onClick}
      >
        {loading ? <Spinner /> : fileName || "No file"}
      </button>
    </>
  );
};

function getStyles(fileName) {
  if (fileName) {
    return styles.pink;
  } else {
    return;
  }
}

export default ImageFileInput;
