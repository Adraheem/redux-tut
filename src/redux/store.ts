import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "./slices/counterSlice";
import postSlice from "./slices/postSlice";

const store = configureStore({
  reducer: {
    counterSlice: counterSlice.reducer,
    postSlice: postSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
