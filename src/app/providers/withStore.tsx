import type { FC } from 'react';
import { Provider } from 'react-redux';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { postsSlice } from '~/features/posts';

import { postsApi } from '~/shared/api';

export const rootReducer = combineReducers({
  posts: postsSlice.reducer,
  [postsApi.reducerPath]: postsApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export const withStore =
  <P,>(WrappedComponent: FC<P>): FC<P> =>
  (props) =>
    (
      <Provider store={store}>
        <WrappedComponent {...props} />
      </Provider>
    );
