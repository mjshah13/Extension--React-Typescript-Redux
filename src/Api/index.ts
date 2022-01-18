import { Users } from "../DB/db";
export const getAllUsers = () => {
  return Users;
};
export const login = (email: string, password: string) => {
  const success = Users.find((user) => {
    if (user?.email == email && user?.password == password) {
      return user;
    }
    throw "user not found!";
  });
  return success;
};

export const register = (
  email: string,
  password: string,
  fullName: string,
  avatar: string
) => {
  const find = Users.find((user) => {
    if (user?.email == email) {
      throw "user already exist!";
    }
  });
  const userObject = { email, password, fullName, avatar, id: Math.random() };
  Users.push(userObject);
  return userObject;
};
