import { EntityState } from '@reduxjs/toolkit';

export interface IBundle {
  code: string;
  err: string;
}

export interface IBundleInitialState {
  loading: boolean;
}

export interface IBundleState
  extends EntityState<IBundle>,
    IBundleInitialState {}

export interface IBundleStart {
  cellId: string;
}

export interface IBundleComplete {
  cellId: string;
  bundle: IBundle;
}
