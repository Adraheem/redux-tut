import React from 'react';
import DisplayCounter from "./DisplayCounter";
import {useAppDispatch} from "../redux/hooks";
import {counterActions} from "../redux/slices/counterSlice";

interface IProps {
}

function Counter(props: IProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="container">
      <DisplayCounter/>
      <div>
        <button className="button" onClick={()=> dispatch(counterActions.increment())}>Increment</button>
        <button className="button" onClick={()=> dispatch(counterActions.incrementBy(10))}>Increment by 10</button><br/><br/>
        <button className="button" onClick={()=> dispatch(counterActions.decrement())}>Decrement</button>
        <button className="button" onClick={()=> dispatch(counterActions.decrementBy(20))}>Decrement by 20</button>
      </div>
    </div>
  );
}

// A -> B -> C -> D -> E -> F Prop drilling

export default Counter;
