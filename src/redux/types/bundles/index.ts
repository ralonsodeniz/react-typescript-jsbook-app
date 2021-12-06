import { EntityState } from '@reduxjs/toolkit';
import { Service } from 'esbuild-wasm';

export interface IBundle {
  loading?: boolean;
  code?: string;
  error?: string;
  id: string;
}

export interface IBundlesState extends EntityState<IBundle> {}

export interface IBundleStart {
  id: string;
  content: string | undefined;
  service: Service | null;
}

export interface IBundleComplete {
  code?: string;
  error?: string;
}
