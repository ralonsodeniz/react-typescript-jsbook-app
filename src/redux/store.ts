import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { cellReducer } from './reducers';
import { bundleReducer } from './reducers';

export const store = configureStore({
  reducer: {
    cell: cellReducer,
    bundle: bundleReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
