import React from "react";
import shekspir from "../.././img/shekspir.png";
import styles from "./Shekspir.module.css";

export const Shekspir = ({ modalActive, setModalActive }) => {
  return (
    <div className={styles.shekspirBook}>
      <img
        className={styles.shekspir}
        src={shekspir}
        alt="Skecspir"
        onClick={() => setModalActive(true)}
      />
    </div>
  );
};
