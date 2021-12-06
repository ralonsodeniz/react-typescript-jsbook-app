import { EntityState } from '@reduxjs/toolkit';

export enum CELL_TYPES {
  CODE = 'code',
  TEXT = 'text',
}

export enum CELL_DIRECTIONS {
  UP = 'up',
  DOWN = 'down',
}

export type TCellTypes = `${CELL_TYPES}`;

export type TCellDirection = `${CELL_DIRECTIONS}`;

export interface ICell {
  id: string;
  type?: TCellTypes;
  content?: string;
  loading?: boolean;
  error?: string | null;
}

export interface ICellsState extends EntityState<ICell> {}

export interface IMoveCell {
  id: string;
  direction: TCellDirection;
}

export interface IInsertCellAfter {
  referenceId: string | null;
  type: TCellTypes;
  id: string;
}
