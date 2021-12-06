import {
  createContext,
  useEffect,
  useState,
  useContext,
  ReactNode,
} from 'react';
import * as esbuild from 'esbuild-wasm';

interface ProviderProps {
  children: ReactNode;
}

const EsbuildServiceContext = createContext<esbuild.Service | null>(null);

const EsbuildServiceProvider = ({ children }: ProviderProps) => {
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

  return (
    <EsbuildServiceContext.Provider value={service}>
      {children}
    </EsbuildServiceContext.Provider>
  );
};

export default EsbuildServiceProvider;

export const useServiceProvider = () => useContext(EsbuildServiceContext)
