import React, { useRef, useState, memo } from "react";
import styles from "./image_file_input.module.css";
import ReactLoading from "react-loading";

const ImageFileInput = memo(({ id, fileName, setImg, imageService }) => {
  const [loading, setLoading] = useState(false);
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
    <div className={styles.container}>
      <input
        type="file"
        ref={inputRef}
        className={styles.imageInput}
        accept="image/*"
        onChange={onImgChange}
      />
      {!loading && (
        <button
          className={`${styles.imageBtn} ${fileName && styles.pink}`}
          onClick={onClick}
        >
          {fileName || "No file"}
        </button>
      )}
      {loading && (
        <div className={styles.loading}>
          <ReactLoading type="spin" color="black" width="100%" height="100%" />
        </div>
      )}
    </div>
  );
});

export default ImageFileInput;
