import {
  CaseReducer,
  nanoid,
  PayloadAction,
} from '@reduxjs/toolkit';
import {
  ICellsState,
  ICell,
  IMoveCell,
  IInsertCellBefore,
  TCellTypes,
} from '../../types/cell';

const moveCell: CaseReducer<ICellsState, PayloadAction<IMoveCell>> = (
  state,
  action,
) => {
  const {
    payload: { direction, id },
  } = action;
  const index = state.order.findIndex(orderId => orderId === id);
  const targetIndex = direction === 'up' ? index - 1 : index + 1;
  const newOrder =
    targetIndex < 0 || targetIndex > state.order.length - 1
      ? [...state.order]
      : state.order.reduce<string[]>((accumulator, orderId, orderIndex) => {
          if (orderId === id) return accumulator;
          return orderIndex === targetIndex
            ? direction === 'up'
              ? [...accumulator, orderId, id]
              : [...accumulator, id, orderId]
            : [...accumulator, orderId];
        }, []);
  return {
    ...state,
    order: newOrder,
  };
};

const deleteCell: CaseReducer<ICellsState, PayloadAction<string>> = (
  state,
  action,
) => {
  delete state.data[action.payload];
  const { [action.payload]: deletedCell, ...newData } = state.data;
  const newOrder = state.order.filter(id => id !== action.payload);
  return {
    ...state,
    order: newOrder,
    data: newData,
  };
};

const updateCell: CaseReducer<ICellsState, PayloadAction<ICell>> = (
  state,
  action,
) => {
  const {
    payload: { id, content },
  } = action;
  const newData = {
    ...state.data,
    [id]: {
      ...state.data[id],
      content,
    },
  };
  return {
    ...state,
    data: newData,
  };
};

const insertCellBefore = {
  reducer: (state:ICellsState, action: PayloadAction<IInsertCellBefore>) => {
    const {
      payload: { id, type, referenceId },
    } = action;
    const newOrder = state.order.some(id => id === referenceId)
      ? state.order.reduce<string[]>(
          (accumulator, element) =>
            element === referenceId
              ? [...accumulator, element, id]
              : [...accumulator, element],
          [],
        )
      : [...state.order, id];
    return {
      ...state,
      data: {
        ...state.data,
        [id]: {
          content: '',
          id,
          type,
        },
      },
      order: newOrder,
    };
  },
  prepare: (type: TCellTypes, referenceId: string | null) => ({
    payload: { id: nanoid(), type, referenceId },
  }),
};

export const reducers = { moveCell, deleteCell, updateCell, insertCellBefore };
