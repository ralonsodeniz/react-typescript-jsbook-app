import { EntityId } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { bundlesAdapter } from '../../actions/bundles';
import { IBundle } from '../../types/bundles';

const selectBundles = (state: RootState) => state.bundle;

const getBundleSelectors = bundlesAdapter.getSelectors(selectBundles);

export const makeSelectBundle = () => (state: RootState, id: EntityId) =>
  getBundleSelectors.selectById(state, id) ||
  ({
    code: '',
    error: '',
    loading: false,
    id,
  } as IBundle);
