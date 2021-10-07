import { useState } from 'react';
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';
import { fetchPlugin } from './plugins/fetch-plugin';
import { Service } from 'esbuild-wasm';

export const useBuild = (rawCode: string, service: Service | null) => {
  const [code, setCode] = useState('');
  const handleBuild = async () => {
    if (service) {
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
      setCode(result.outputFiles[0].text);
    }
  };

  return { code, handleBuild };
};
