import React from 'react';
import styles from './Input.module.scss';

const Input = ({ label, placeHolder, onChange }: any) => {
  return (
    <>
      <div className={styles.heading_container}>
        <h3>{label}</h3>
      </div>
      <div className={styles.input_container}>
        <input type='text' placeholder={placeHolder} onChange={onChange} />
      </div>
    </>
  );
};

export default Input;
