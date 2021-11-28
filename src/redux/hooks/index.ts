import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import type { RootState, AppDispatch } from '../store';
import { cellActions } from '../reducers';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useBoundActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators({ ...cellActions }, dispatch);
};
