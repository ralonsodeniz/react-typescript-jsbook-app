import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import type { AppDispatch, RootState } from '../store';
import { bundleActions, cellActions } from '../reducers';
import { useMemo } from 'react';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useBoundActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(
    () => bindActionCreators({ ...cellActions, ...bundleActions }, dispatch),
    [dispatch],
  );
};
