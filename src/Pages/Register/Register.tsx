import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Input from "../../Components/Common/Input/Input";
import Button from "../../Components/Common/Button/Button";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { Login, Signup } from "../../Redux/action";
import { useDispatch } from "react-redux";
const Register = () => {
  const [placeHolder, setPlaceHolder] = useState("");
  let [inputData, setInputData] = useState("");
  const [email, setEmail] = useState<string>("m.jah13@gmail.com");
  const [password, setPassword] = useState<string>("12456");
  const [avatar, setAvatar] = useState<string>("https");
  const [fullName, setFullName] = useState<string>("12456");

  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.userReducer);
  console.log(user, "users");
  useEffect(() => {
    dispatch(Signup(email, password, fullName, avatar));
  }, []);
  const navigate = useNavigate();
  function inputHandler() {
    let result = "Ex (337) 378 8383";
    if (placeHolder === "email") {
      result = "johndoe@gmail.com";
    } else if (placeHolder === "phone") {
      result = "Ex (337) 378 8383";
    }
    return result;
  }
  return (
    <div>
      <Header btn={false} logo="/Logo.svg" title="Page" defaultTitle="Home" />
      <div className={styles.btn_container}>
        <button onClick={() => setPlaceHolder("email")}>Email</button>
        <button
          className={placeHolder === "email" ? "" : styles.default}
          onClick={() => setPlaceHolder("phone")}
        >
          Phone
        </button>
      </div>

      <Input
        placeHolder={inputHandler()}
        onChange={(e: any) => {
          setInputData(e.target.value);
        }}
      />
      <div className={styles.btn}>
        <Button
          width="136px"
          bgColor={inputData ? "#885FFF" : "#BEBEC2"}
          text="Continue"
          onClick={() => {
            navigate("/verification");
            console.log("triggered");
          }}
        />
      </div>
      <div className={styles.terms}>
        <p>
          by clicking continue you must agree to near labs{" "}
          <span>
            <a href="">Terms & Conditions </a>
          </span>
          and{" "}
          <span>
            <a href="">Privacy Policy</a>
          </span>
        </p>
      </div>
      <hr className={styles.hr} />
      <div className={styles.heading}>
        <h2>Already have NEAR account?</h2>
      </div>
      <div className={styles.btn_near}>
        <Button
          bgColor="#414047"
          text="Log in with NEAR"
          width="186px"
          onClick={() => {
            navigate("/create-acc");
            console.log("triggered");
          }}
        />
      </div>
    </div>
  );
};

export default Register;
