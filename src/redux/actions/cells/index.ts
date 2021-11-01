import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { ICellsState, ICell, IMoveCell } from '../../types/cell';

const moveCell: CaseReducer<ICellsState, PayloadAction<IMoveCell>> = (
  state,
  action,
) => {
  const {
    payload: { direction, id },
  } = action;
  const index = state.order.findIndex(orderId => orderId === id);
  const targetIndex = direction === 'up' ? index - 1 : index + 1;
  if (targetIndex > 0 && targetIndex <= state.order.length - 1) {
    state.order[index] = state.order[targetIndex];
    state.order[targetIndex] = id;
  }
};

const deleteCell: CaseReducer<ICellsState, PayloadAction<string>> = (
  state,
  action,
) => {
  delete state.data[action.payload];
  state.order = state.order.filter(id => id !== action.payload);
};

const updateCell: CaseReducer<ICellsState, PayloadAction<ICell>> = (
  state,
  action,
) => {
  const {
    payload: { id, content },
  } = action;
  state.data[id].content = content;
};

export const reducers = { moveCell, deleteCell, updateCell };
