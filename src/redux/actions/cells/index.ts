import {
  CaseReducer,
  createEntityAdapter,
  EntityId,
  nanoid,
  PayloadAction,
} from '@reduxjs/toolkit';
import {
  ICellsState,
  ICell,
  IMoveCell,
  IInsertCellAfter,
  TCellTypes,
  CELL_DIRECTIONS,
} from '../../types/cells';

export const cellsAdapter = createEntityAdapter<ICell>();

const moveCell: CaseReducer<ICellsState, PayloadAction<IMoveCell>> = (
  state,
  action,
) => {
  const {
    payload: { direction, id },
  } = action;
  const index = state.ids.findIndex(orderId => orderId === id);
  const targetIndex = direction === CELL_DIRECTIONS.UP ? index - 1 : index + 1;
  const newOrder =
    targetIndex < 0 || targetIndex > state.ids.length - 1
      ? [...state.ids]
      : state.ids.reduce<EntityId[]>((accumulator, orderId, orderIndex) => {
          if (orderId === id) return accumulator;
          return orderIndex === targetIndex
            ? direction === CELL_DIRECTIONS.UP
              ? [...accumulator, id, orderId]
              : [...accumulator, orderId, id]
            : [...accumulator, orderId];
        }, []);
  return {
    ...state,
    ids: newOrder,
  };
};

const deleteCell: CaseReducer<
  ICellsState,
  PayloadAction<string>
> = cellsAdapter && cellsAdapter.removeOne;

const updateCell: CaseReducer<
  ICellsState,
  PayloadAction<ICell>
> = cellsAdapter && cellsAdapter.upsertOne;

const insertCellAfter = {
  reducer: (state: ICellsState, action: PayloadAction<IInsertCellAfter>) => {
    const {
      payload: { id, type, referenceId },
    } = action;
    const newOrder = state.ids.some(id => id === referenceId)
      ? state.ids.reduce<EntityId[]>(
          (accumulator, element) =>
            element === referenceId
              ? [...accumulator, element, id]
              : [...accumulator, element],
          [],
        )
      : [id, ...state.ids];
    return {
      ...state,
      entities: {
        ...state.entities,
        [id]: {
          content: '',
          id,
          type,
        },
      },
      ids: newOrder,
    };
  },
  prepare: (type: TCellTypes, referenceId: string | null) => ({
    payload: { id: nanoid(), type, referenceId },
  }),
};

export const reducers = { deleteCell, updateCell, moveCell, insertCellAfter };
