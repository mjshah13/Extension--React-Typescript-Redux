import React from 'react';
import { ReactSVG } from 'react-svg';
import styles from './Categories.module.scss';
const Categories = ({ icon, iconBg, title, boxBg }: any) => {
  //icon,icon_bg,title,box_bg--> props
  return (
    <div className={styles.main_container} style={{ backgroundColor: boxBg }}>
      <div
        className={styles.icon_container}
        style={{ backgroundColor: iconBg }}
      >
        <img src={icon} alt='icon' />
      </div>
      <div className={styles.title_container}>
        <h3>{title}</h3>
        <button>
          <ReactSVG src='/Arrow.svg' className={styles.arrow_svg} />
        </button>
      </div>
    </div>
  );
};

export default Categories;
