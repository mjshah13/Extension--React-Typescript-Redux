import React from 'react';
import styles from './Button.module.scss';

const Button = ({ bgColor, text, onClick, width }: any) => {
  return (
    <div className={styles.btn_container}>
      <button
        onClick={onClick}
        style={{ backgroundColor: bgColor, width: width }}
      >
        <span>{text}</span> <img src='/Arrow.svg' alt='Arrow' />
      </button>
    </div>
  );
};

export default Button;
