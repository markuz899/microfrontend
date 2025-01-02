import {
  CounterAction,
  CounterState,
  DECREMENT,
  FETCH_DATA_FAILED,
  FETCH_DATA_SUCCESS,
  FETCH_DETAIL_DATA_FAILED,
  FETCH_DETAIL_DATA_SUCCESS,
  INCREMENT,
} from "./interface";

const initialState: CounterState = {
  count: 0,
  data: [],
  detail: null,
};

const counterReducer = (
  state = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload };
    case FETCH_DATA_FAILED:
      return { ...state, data: [] };
    case FETCH_DETAIL_DATA_SUCCESS:
      return { ...state, detail: action.payload };
    case FETCH_DETAIL_DATA_FAILED:
      return { ...state, detail: null };
    default:
      return state;
  }
};

const getData = () => async (dispatch: any) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    dispatch({
      type: FETCH_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_DATA_FAILED,
      payload: null,
    });
  }
};

const getDetailData = (id: any) => async (dispatch: any) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    const data = await response.json();

    dispatch({
      type: FETCH_DETAIL_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_DETAIL_DATA_FAILED,
      payload: null,
    });
  }
};

export { counterReducer, getData, getDetailData };
