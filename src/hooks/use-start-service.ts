import { useState, useEffect } from 'react';
import * as esbuild from 'esbuild-wasm';

export const useStartService = () => {
  const [service, setService] = useState<esbuild.Service | null>(null);

  useEffect(() => {
    const startService = async () => {
      const service = await esbuild.startService({
        worker: true,
        wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm',
      });
      setService(service);
    };
    startService();
  }, []);

  return service;
};
