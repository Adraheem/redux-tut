import React from 'react';
import {useAppSelector} from "../redux/hooks";

interface IProps {
}

function DisplayCounter(props: IProps) {

  const aa = useAppSelector(state => state.counterSlice);

  return (
    <h1 className="counter">{aa.counter}</h1>
  );
}

export default DisplayCounter;