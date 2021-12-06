import { RootState } from '../../store';
import { cellsAdapter } from '../../actions/cells';
import { createSelector, EntityId } from '@reduxjs/toolkit';
import { ICell } from '../../types/cells';

const selectCells = (state: RootState) => state.cell;

const getCellSelectors = cellsAdapter.getSelectors(selectCells);

export const selectAllCells = (state: RootState) =>
  getCellSelectors.selectAll(state);

// same as above
// export const selectCellsList = createSelector(
//     [selectCells],
//     ({ order, data }) => order.map(id => data[id]),
// );

export const selectCellById = (state: RootState, id: EntityId) =>
  getCellSelectors.selectById(state, id);

export const makeSelectCumulativeContent = () =>
  createSelector([selectAllCells, selectCellById], (cells, cell) => {
    const cellIndex = cells.indexOf(cell as ICell);
    return cells
      .reduce<string[]>(
        (accumulator, cell, index) =>
          index <= cellIndex
            ? accumulator.concat(cell.content as string)
            : accumulator,
        [],
      )
      .join('\n');
  });
