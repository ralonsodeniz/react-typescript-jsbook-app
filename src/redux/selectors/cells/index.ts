import { RootState } from '../../store';
import { cellsAdapter } from '../../actions/cells';

const selectCells = (state: RootState) => state.cell;

const getCellSelectors = cellsAdapter.getSelectors(selectCells);

export const selectCellsList = (state: RootState) =>
  getCellSelectors.selectAll(state);

// same as above
// export const selectCellsList = createSelector(
//     [selectCells],
//     ({ order, data }) => order.map(id => data[id]),
// );
