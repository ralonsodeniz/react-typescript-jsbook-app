import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {cellActions, cellReducer} from './reducers';

export const store = configureStore({
  reducer: {
    cell: cellReducer,
  },
});

store.dispatch(cellActions.insertCellBefore('code', null));
store.dispatch(cellActions.insertCellBefore('text', null));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
