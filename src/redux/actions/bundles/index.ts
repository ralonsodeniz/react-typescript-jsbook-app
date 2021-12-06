import {
  ActionReducerMapBuilder,
  CaseReducer,
  createAsyncThunk,
  createEntityAdapter,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import {
  IBundle,
  IBundleComplete,
  IBundlesState,
  IBundleStart,
} from '../../types/bundles';
import { handleBuild } from '../../../utils/bundle';

export const bundlesAdapter = createEntityAdapter<IBundle>();

const deleteBundle: CaseReducer<
  IBundlesState,
  PayloadAction<string>
> = bundlesAdapter.removeOne;

export const createBundle = createAsyncThunk<IBundleComplete, IBundleStart>(
  'bundle/createBundle',
  async ({ content, service }) => {
    const { code, error } = (await handleBuild(
      content,
      service,
    )) as IBundleComplete;
    return {
      code,
      error,
    };
  },
);

export const reducers = { deleteBundle };

export const extraReducers = (
  builder: ActionReducerMapBuilder<EntityState<IBundle>>,
) => {
  builder
    .addCase(createBundle.pending, (state, action) => {
      const {
        meta: {
          arg: { id },
        },
      } = action;
      bundlesAdapter.upsertOne(state, {
        loading: true,
        code: '',
        error: '',
        id,
      });
    })
    .addCase(createBundle.fulfilled, (state, action) => {
      const { payload, meta } = action;
      const { code, error } = payload;
      const {
        arg: { id },
      } = meta;
      bundlesAdapter.upsertOne(state, {
        loading: false,
        code,
        error,
        id,
      });
    });
};
