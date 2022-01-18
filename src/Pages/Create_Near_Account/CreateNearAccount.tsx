import React from 'react';
import styles from './CreateNearAccount.module.scss';
import Header from '../../Components/Header/Header';
import Button from '../../Components/Common/Button/Button';
import Input from '../../Components/Common/Input/Input';
import { useNavigate } from 'react-router-dom';
import SubInput from '../../Components/Common/Sub-Input/SubInput';

const CreateNearAccount = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.main_container}>
      <Header
        headerImg={false}
        title='Create NEAR account'
        crossIcon='/Cross.svg'
        btn={true}
      />
      <div className={styles.top_sec}>
        <p>
          Enter an Account ID to use with your NEAR account. Your Account ID
          will be used for all NEAR operations, including sending and receiving
          assets.
        </p>
      </div>
      <div className={styles.input}>
        <Input
          label='Full Name'
          placeHolder='Ex.john doe'
          onChange={onchange}
        />
      </div>
      <div className={styles.sub_input}>
        <SubInput
          label='Account ID'
          icon='/info.svg'
          spanText='.near'
          placeHolder='yourname'
          onChange={onchange}
        />
      </div>
      <div className={styles.btn}>
        <Button
          width='136px'
          bgColor='#885FFF'
          text='Continue'
          onClick={() => {
            navigate('/secure-acc');
            console.log('triggered');
          }}
        />
      </div>
      <div className={styles.terms}>
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
      <hr className={styles.hr} />
      <div className={styles.heading}>
        <h2>Already have NEAR account?</h2>
      </div>
      <div className={styles.btn_near}>
        <Button
          bgColor='#414047'
          text='Log in with NEAR'
          width='186px'
          onClick={() => {
            console.log('triggered');
          }}
        />
      </div>
    </div>
  );
};

export default CreateNearAccount;
