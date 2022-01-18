import React from 'react';
import styles from './SecureAccount.module.scss';
import Header from '../../Components/Header/Header';
import Input from '../../Components/Common/Input/Input';
import Button from '../../Components/Common/Button/Button';
import { useNavigate } from 'react-router-dom';

const SecureAccount = () => {
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
      </div>
      <div className={styles.input_container1}>
        <Input label='Password' onChange={onchange} />
      </div>
      <div className={styles.input_container2}>
        <Input label='Confirm Password' onChange={onchange} />
      </div>
      <div className={styles.btn}>
        <Button
          width='136px'
          bgColor='#885FFF'
          text='Continue'
          onClick={() => {
            navigate('/seed-phrase');
            console.log('triggered');
          }}
        />
      </div>
      <div className={styles.terms}>
        <h4>
          <a href='mailto:claudio@metapool.app'>claudio@metapool.app</a>
        </h4>
        <p>
          By creating a NEAR account, you agree to the NEAR Wallet
          <span>
            <a href=''> Terms of Service </a>
          </span>
          and{' '}
          <span>
            <a href=''>Privacy Policy</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SecureAccount;
