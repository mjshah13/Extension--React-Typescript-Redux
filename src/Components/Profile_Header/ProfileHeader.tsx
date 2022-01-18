import React from 'react';
import styles from './ProfileHeader.module.scss';

const ProfileHeader = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.back_arrow}>
        <button>
          <img src='/back_arrow.svg' alt='icon' />
        </button>
      </div>
      <div className={styles.home}>
        <button>
          <img src='/home.svg' alt='icon' />
        </button>
      </div>
      <div className={styles.search}>
        <button>
          <img
            src='/circle_avatar.svg'
            alt='icon'
            className={styles.avatar_icon}
          />
        </button>

        <h3>johndoe.near</h3>
        <button>
          <img
            src='search_field_arrow.svg'
            alt='icon'
            className={styles.search_arrow}
          />
        </button>
      </div>
      <div className={styles.noticification}>
        <button>
          <img src='/notification.svg' alt='icon' />
        </button>
      </div>
      <div className={styles.settings}>
        <button>
          <img src='/settings.svg' alt='' />
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
