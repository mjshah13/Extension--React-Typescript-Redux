import React from 'react';
import styles from './SeedPhrase.module.scss';
import Header from '../../Components/Header/Header';
import Phrase from '../../Components/Phrase/Phrase';
import Button from '../../Components/Common/Button/Button';
import { useNavigate } from 'react-router-dom';

import { Row, Col } from 'antd';
const SeedPhrase = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.main_container}>
      <Header
        headerImg={false}
        title='Secure your account'
        crossIcon='/Cross.svg'
        btn={true}
      />
      <div className={styles.top_sec}>
        <p>Keep your apps safe from other with access to your computer.</p>

        <div className={styles.seed_phrase}>
          <h2>Seed Phrase</h2>
          <div className={styles.phrases}>
            <Row className={styles.row}>
              <Col sm={8} className={styles.gap}>
                <Phrase num='1' content='gather' />
              </Col>
              <Col sm={8} className={styles.gap}>
                <Phrase num='2' content='engage' />
              </Col>
              <Col sm={8} className={styles.gap}>
                <Phrase num='3' content='father' />
              </Col>
              <Col sm={8} className={styles.gap}>
                <Phrase num='4' content='plant' />
              </Col>
              <Col sm={8} className={styles.gap}>
                <Phrase num='5' content='indego' />
              </Col>
              <Col sm={8} className={styles.gap}>
                <Phrase num='6' content='dental' />
              </Col>
              <Col sm={8} className={styles.gap}>
                <Phrase num='7' content='sick' />
              </Col>
              <Col sm={8} className={styles.gap}>
                <Phrase num='8' content='fungus' />
              </Col>
              <Col sm={8} className={styles.gap}>
                <Phrase num='9' content='river' />
              </Col>
              <Col sm={8} className={styles.gap}>
                <Phrase num='10' content='morning' />
              </Col>
              <Col sm={8} className={styles.gap}>
                <Phrase num='11' content='love' />
              </Col>
              <Col sm={8} className={styles.gap}>
                <Phrase num='12' content='cow' />
              </Col>
            </Row>
          </div>
          <div className={styles.copy_seed}>
            <a>
              <img src='/copy_icon.svg' />
              Copy seed
            </a>
          </div>
        </div>
        <div className={styles.btn}>
          <Button
            width='202px'
            bgColor='#885FFF'
            text='Continue to Log in'
            onClick={() => {
              navigate('/home');
              console.log('triggered');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SeedPhrase;
