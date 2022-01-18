import React from 'react';
import styles from './SubInput.module.scss';

const SubInput = ({ label, icon, spanText, placeHolder, onChange }: any) => {
  return (
    <>
      <div className={styles.heading_container}>
        <h3>{label}</h3>
        <img src={icon} alt='icon' />
      </div>
      <div className={styles.input_container}>
        <input type='text' placeholder={placeHolder} onChange={onChange} />
        <span>{spanText}</span>
      </div>
    </>
  );
};

export default SubInput;
