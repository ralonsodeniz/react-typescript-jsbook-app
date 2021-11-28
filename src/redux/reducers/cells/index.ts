import { createSlice } from '@reduxjs/toolkit';
import { ICellInitialState } from '../../types/cells';
import {cellsAdapter, reducers} from '../../actions/cells';

const initialState = cellsAdapter.getInitialState<ICellInitialState>({
  loading: false,
  error: null,
});

export const cellSlice = createSlice({
  name: 'cell',
  initialState,
  reducers,
});

export const { actions: cellActions, reducer: cellReducer } = cellSlice;
