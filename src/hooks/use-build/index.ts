import { useState } from 'react';
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';
import { fetchPlugin } from './plugins/fetch-plugin';
import { Service, BuildFailure } from 'esbuild-wasm';

export const useBuild = (
  rawCode: string | undefined,
  service: Service | null,
) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const handleBuild = async () => {
    if (service) {
      try {
        const result = await service.build({
          entryPoints: ['index.js'],
          bundle: true,
          write: false,
          plugins: [unpkgPathPlugin(), fetchPlugin(rawCode)],
          define: {
            'process.env.NODE_ENV': '"production"',
            global: 'window',
          },
        });
        setError('');
        setCode(result.outputFiles[0].text);
      } catch (error: unknown) {
        const { message } = error as BuildFailure;
        setError(message);
      }
    }
  };

  return { code, error, handleBuild };
};
