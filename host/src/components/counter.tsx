import { connect } from "react-redux";
import {
  CounterProps,
  CounterState,
  DECREMENT,
  INCREMENT,
} from "../redux/reducers/counter/interface";
import { getData, getDetailData } from "../redux/reducers/counter";
import styled from "styled-components";
import { Button } from "@nyp/tenantuikit";

const Counter = ({
  counter,
  increment,
  decrement,
  fetchData,
  fetchDetailData,
}: CounterProps) => {
  console.log(counter);
  return (
    <CounterStyle>
      <p className="counter_title">Counter: {counter.count}</p>
      <p className="counter_title">Data length: {counter.data.length}</p>
      <p className="counter_title">Data id: {counter.detail?.id || "None"}</p>
      <Button fluid onClick={() => increment()}>
        Increment
      </Button>
      <Button fluid onClick={() => decrement()}>
        Decrement
      </Button>
      <Button fluid onClick={() => fetchData()}>
        GET ALL DATA
      </Button>
      <Button fluid onClick={() => fetchDetailData(10)}>
        GET DETAIL DATA
      </Button>
    </CounterStyle>
  );
};

const mapStateToProps = ({ counter }: { counter: CounterState }) => ({
  counter: counter,
});

const mapDispatchToProps = (dispatch: any) => ({
  increment: () => dispatch({ type: INCREMENT }),
  decrement: () => dispatch({ type: DECREMENT }),
  fetchData: () => dispatch(getData()),
  fetchDetailData: (payload?: number) => dispatch(getDetailData(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const CounterStyle = styled.div`
  button {
    margin: 10px 0;
    justify-content: center;
  }
`;
