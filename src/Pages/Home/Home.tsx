import React from 'react';
import styles from './Home.module.scss';
import Contract from '../../Components/Contract/Contract';
import ProfileHeader from '../../Components/Profile_Header/ProfileHeader';
import { Row, Col } from 'antd';
import { ReactSVG } from 'react-svg';
import Categories from '../../Components/Categories/Categories';
const Home = () => {
  return (
    <div className={styles.main_container}>
      <ProfileHeader />
      <div className={styles.search}>
        <div className={styles.div_one}>
          <img src='/search.svg' alt='' />
          <input type='text' placeholder='Search experiences' />
        </div>
        <div className={styles.div_two}>
          <button>
            <img src='/filter.svg' alt='' />
          </button>
        </div>
      </div>
      <div className={styles.experiences}>
        <h2>Recent Experiences</h2>
        <div className={styles.contract}>
          <Contract
            img='/defi_logo.svg'
            name='DeFi Swap'
            desc='Swap your digital assets'
            user='+200 users'
          />
        </div>
        <div className={styles.contract}>
          <Contract
            img='/docu_logo.svg'
            name='Docu Sign'
            desc='Sign smart contracts seamlessly'
            user='+1k users'
          />
        </div>
      </div>
      <div className={styles.categories}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <h2>Categories</h2>
          </div>
          <div className={styles.seeAll}>
            <button>
              See All
              <ReactSVG src='/Arrow.svg' />
            </button>
          </div>
        </div>
        <Row className={styles.row}>
          <Col sm={10} className={styles.category}>
            <Categories
              icon='/exchanges.svg'
              iconBg='#587BE0'
              title='Exchanges'
              boxBg='#EAEFFF'
            />
          </Col>
          <Col sm={10} className={styles.category}>
            <Categories
              icon='/game.svg'
              iconBg='#414047'
              title='Games'
              boxBg='#F5F5F5'
            />
          </Col>
          <Col sm={10} className={styles.category}>
            <Categories
              icon='/market.svg'
              iconBg='#34AE91'
              title='Marketplaces'
              boxBg='#E2F9F3'
            />
          </Col>
          <Col sm={10} className={styles.category}>
            <Categories
              icon='/box.svg'
              iconBg='#F98F54'
              title='Defi'
              boxBg='#FFF3EC'
            />
          </Col>
        </Row>
      </div>{' '}
      <div className={styles.experiences}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <h2>Trending Experience</h2>
          </div>
          <div className={styles.seeAll}>
            <button>
              See All
              <ReactSVG src='/Arrow.svg' />
            </button>
          </div>
        </div>

        <div className={styles.contract}>
          <Contract
            img='/docu_logo.svg'
            name='Docu Sign'
            desc='Sign smart contracts seamlessly'
            user='+1k users'
          />
        </div>
        <div className={styles.contract}>
          <Contract
            img='/defi_logo.svg'
            name='DeFi Swap'
            desc='Swap your digital assets'
            user='+200 users'
          />
        </div>
        <div className={styles.contract}>
          <Contract
            img='/docu_logo.svg'
            name='Docu Sign'
            desc='Sign smart contracts seamlessly'
            user='+1k users'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
