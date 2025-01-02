export interface CounterState {
  count: number;
  data: any[];
  detail: { [key: string]: any } | null;
}

export interface CounterProps {
  counter: { [key: string]: any };
  increment: () => void;
  decrement: () => void;
  fetchData: () => void;
  fetchDetailData: (payload?: number) => void;
}

export interface CounterAction {
  type: string;
  payload?: any;
}

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILED = "FETCH_DATA_FAILED";
export const FETCH_DETAIL_DATA_SUCCESS = "FETCH_DETAIL_DATA_SUCCESS";
export const FETCH_DETAIL_DATA_FAILED = "FETCH_DETAIL_DATA_FAILED";
