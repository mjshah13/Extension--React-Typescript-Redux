import { ActionTypes } from "./types";
interface RecorderState {
  loading: boolean,
  error: string,
  user: object,
}
let INITIAL_STATE: RecorderState = {
  loading: false,
  error: "",
  user: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case ActionTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    case ActionTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
   

    default:
      return state;
  }
};
