import { Action } from "redux";
import { ActionTypes } from "./types";
import { ThunkAction } from "redux-thunk";
import { RootState } from "./store";
import { login, register } from "../Api/index";
export interface User {
  id: number;
  email: string;
  avatar: string;
  fullName: string;
  password: string;
}

interface LoadReaquestAction extends Action<typeof ActionTypes.LOAD_REQUEST> {}

interface LoadSuccessAction extends Action<typeof ActionTypes.LOAD_SUCCESS> {
  payload: {
    user: User;
  };
}

interface LoadFailureAction extends Action<typeof ActionTypes.LOAD_FAILURE> {
  error: string;
}

export const Login =
  (
    email,
    password
  ): ThunkAction<
    void,
    RootState,
    undefined,
    LoadReaquestAction | LoadSuccessAction | LoadFailureAction
  > =>
  async (dispatch) => {
    dispatch({
      type: ActionTypes.LOAD_REQUEST,
    });

    try {
      const users = login(email, password);

      dispatch({
        type: ActionTypes.LOAD_SUCCESS,
        payload: users,
      });
    } catch (e) {
      console.log(e, "errr");
      dispatch({
        type: ActionTypes.LOAD_FAILURE,
        error: "Failed to load events.",
      });
    }
  };

export const Signup =
  (
    email,
    password,
    avatar,
    fullName
  ): ThunkAction<
    void,
    RootState,
    undefined,
    LoadReaquestAction | LoadSuccessAction | LoadFailureAction
  > =>
  async (dispatch) => {
    dispatch({
      type: ActionTypes.LOAD_REQUEST,
    });

    try {
      const users = register(email, password, fullName, avatar);

      dispatch({
        type: ActionTypes.LOAD_SUCCESS,
        payload: users,
      });
    } catch (e) {
      console.log(e, "errr");
      dispatch({
        type: ActionTypes.LOAD_FAILURE,
        error: "Failed to load events.",
      });
    }
  };
