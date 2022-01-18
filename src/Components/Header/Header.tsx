import React from "react";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <div className={styles.main_container}>
      <img src="/Logo.svg" alt="Logo" />
      HomePage
      <button>
        <img src="/Cross.svg" alt="Cancel" />
      </button>
    </div>
  );
};

export default Header;
