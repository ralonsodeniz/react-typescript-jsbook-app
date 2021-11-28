import { RootState } from '../../store';
import { createSelector } from '@reduxjs/toolkit';

const selectCells = (state: RootState) => state.cell;

export const selectCellsList = createSelector(
  [selectCells],
  ({ order, data }) => order.map(id => data[id]),
);
