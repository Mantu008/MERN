import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCESS,
} from "./UserTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USER_SUCESS:
      return {
        loading: false,
        users: action.paylod,
        error: "",
      };

    case FETCH_USER_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.paylod,
      };

    default:
      return state;
  }
};

export default UserReducer;
