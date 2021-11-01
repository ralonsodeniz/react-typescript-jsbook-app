import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { ICellsState, IInsertCellBefore, TCellTypes } from '../../types/cell';
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
    insertCellBefore: {
      reducer: (state, action: PayloadAction<IInsertCellBefore>) => {
        const {
          payload: { id, type, referenceId },
        } = action;
        state.data[id] = {
          content: '',
          id,
          type,
        };
        const index = state.order.findIndex(id => id === referenceId);
        index < 0 ? state.order.push(id) : state.order.splice(index, 0, id);
      },
      prepare: (type: TCellTypes, referenceId: string | null) => ({
        payload: { id: nanoid(), type, referenceId },
      }),
    },
  },
});

export const { actions: cellActions, reducer: cellReducer } = cellSlice;
