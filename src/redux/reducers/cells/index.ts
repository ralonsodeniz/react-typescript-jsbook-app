import { createSlice } from '@reduxjs/toolkit';
import { cellsAdapter, reducers } from '../../actions/cells';

const initialState = cellsAdapter.getInitialState();

export const cellSlice = createSlice({
  name: 'cell',
  initialState,
  reducers,
});

export const { actions: cellActions, reducer: cellReducer } = cellSlice;
