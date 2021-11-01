export type TCellTypes = 'code' | 'text';

export type TCellDirection = 'up' | 'down';

export interface ICell {
  id: string;
  type?: TCellTypes;
  content?: string;
}

export interface ICellsState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: ICell;
  };
}

export interface IMoveCell {
  id: string;
  direction: TCellDirection;
}

export interface IInsertCellBefore {
  referenceId: string | null;
  type: TCellTypes;
  id: string;
}
