import React from 'react';
import styles from './Header.module.scss';
const Header = ({
  logo,
  headerImg,
  title,
  defaultTitle,
  crossIcon,
  btn,
}: any) => {
  return (
    <div className={styles.main_container}>
      {headerImg === false ? '' : <img src={logo} />}

      <span>{defaultTitle}</span>
      {title}
      {btn === true ? (
        <button>
          <img src={crossIcon} />
        </button>
      ) : null}
    </div>
  );
};

export default Header;
