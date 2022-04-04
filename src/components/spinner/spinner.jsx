import React from "react";
import ReactLoading from "react-loading";
import styles from "./spinner.module.css"

const Spinner = (props) => {
  return (
    <div className={styles.spinner}>
      <ReactLoading type="spin" color="black" width="100%" height="100%"/>
    </div>
  );
};
export default Spinner;