export enum CellTypes {
  CODE = 'code',
  TEXT = 'text',
}

export enum CellDirections {
  UP = 'up',
  DOWN = 'down',
}

export type TCellTypes = `${CellTypes}`;

export type TCellDirection = `${CellDirections}`;

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

export interface IInsertCellAfter {
  referenceId: string | null;
  type: TCellTypes;
  id: string;
}
