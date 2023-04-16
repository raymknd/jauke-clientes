import { configureStore } from '@reduxjs/toolkit'
import loaderReducer from './reducers/loader';
import sessionReducer from './reducers/session';

const store = configureStore({
  reducer: {
    loader: loaderReducer,
    session: sessionReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;