// type
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPost} from "../../types/post.type";

interface IPostSlice {
  isLoading: boolean;
  post?: IPost;
}

// initialState
const initialState: IPostSlice = {
  isLoading: true,
}

// slice
const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    setPost: (state, action: PayloadAction<IPost>) => {
      state.post = action.payload;
      state.isLoading = false;
    }
  }
});

export const postActions = postSlice.actions;
export default postSlice;
