import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import OTPInput from 'otp-input-react';
import styles from './Verification.module.scss';
import Button from '../../Components/Common/Button/Button';
import { useNavigate } from 'react-router-dom';

const Verification = () => {
  const [OTP, setOTP] = useState('');
  const navigate = useNavigate();

  return (
    <div className={styles.main_container}>
      <Header
        btn={true}
        headerImg={false}
        crossIcon='/Cross.svg'
        title='Verification'
      />
      <div className={styles.top_section}>
        <h4>We've sent a 6-digit verification code to the email address</h4>
        <h2>johndoe@gmail.com</h2>
      </div>
      <div className={styles.input_code}>
        <p>Enter verification code</p>
        <div className={styles.otp}>
          <OTPInput
            value={OTP}
            onChange={() => setOTP}
            autoFocus
            OTPLength={6}
            otpType='number'
            disabled={false}
          />
        </div>
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
      <hr className={styles.hr} />
      <div className={styles.heading}>
        <h2>Didn't receive your code?</h2>
        <p>Send to a different email address</p>
        <a href='#'>Resend your code</a>
      </div>
    </div>
  );
};

export default Verification;
