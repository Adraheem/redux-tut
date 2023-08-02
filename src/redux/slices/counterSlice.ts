// type or interface
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ICounterSlice {
  counter: number;
}

// initial state
const initialState: ICounterSlice = {
  counter: 55,
}

// slice
const counterSlice = createSlice({
  name: "counterSlice",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.counter = state.counter + 1;
    },
    decrement: (state)=>{
      state.counter = state.counter - 1;
    },
    incrementBy: (state, action: PayloadAction<number>)=>{
      state.counter = state.counter + action.payload;
    },
    decrementBy: (state, action: PayloadAction<number>)=>{
      state.counter = state.counter - action.payload;
    },
  }
});

export const counterActions = counterSlice.actions;

export default counterSlice;
