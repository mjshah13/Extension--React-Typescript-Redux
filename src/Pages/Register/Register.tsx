import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Common/Button/Button";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { Login, Signup } from "../../Redux/action";
import { useDispatch } from "react-redux";
const Register = () => {
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
  return (
    <div>
      <Header />
      <Button />
    </div>
  );
};

export default Register;
