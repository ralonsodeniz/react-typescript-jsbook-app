import { createSlice } from '@reduxjs/toolkit';
import { ICellsState } from '../../types/cell';
import { reducers } from '../../actions/cells';

const initialState: ICellsState = {
  loading: false,
  error: null,
  order: [],
  data: {},
};

export const cellSlice = createSlice({
  name: 'cell',
  initialState,
  reducers: {
    ...reducers,
  },
});

export const { actions: cellActions, reducer: cellReducer } = cellSlice;
