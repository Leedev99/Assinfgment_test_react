import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCHING_DATA,
  POST_DATA,
} from "../const";

const initialState = {
  data: [],
  _Fetching: false,
  error: false,
};

export default function ReducerData(state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        _Fetching: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        _Fetching: false,
        data: action.data,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        _Fetching: false,
        error: true,
      };
    case POST_DATA:
      return {
        ...state,
        _Fetching: false,

      };
    default:
      return state;
  }
}
