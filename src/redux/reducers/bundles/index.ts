import { createSlice } from '@reduxjs/toolkit';
import { bundlesAdapter, extraReducers, reducers } from '../../actions/bundles';
import { createBundle } from '../../actions/bundles';

const initialState = bundlesAdapter.getInitialState();

export const bundleSlice = createSlice({
  name: 'bundle',
  initialState,
  reducers,
  extraReducers: extraReducers,
});

const { actions, reducer: bundleReducer } = bundleSlice;

const bundleActions = { ...actions, createBundle };

export { bundleActions, bundleReducer };
