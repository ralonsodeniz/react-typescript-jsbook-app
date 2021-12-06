import {BuildFailure, BuildResult, OutputFile, Service} from 'esbuild-wasm';
import { unpkgPathPlugin } from '../hooks/use-build/plugins/unpkg-path-plugin';
import { fetchPlugin } from '../hooks/use-build/plugins/fetch-plugin';
import { waitPromise } from './wait';

export const handleBuild = async (
  content: string | undefined,
  service: Service | null,
) => {
  if (service) {
    try {
      const buildPromise = service.build({
        entryPoints: ['index.js'],
        bundle: true,
        write: false,
        plugins: [unpkgPathPlugin(), fetchPlugin(content)],
        define: {
          'process.env.NODE_ENV': '"production"',
          global: 'window',
        },
      });
      const [build] = await Promise.allSettled([
        buildPromise,
        waitPromise(1000),
      ]);
      const { value } = build as PromiseFulfilledResult<BuildResult & {outputFiles: OutputFile[]}>;
      const {
        outputFiles: [bundle],
      } = value;
      return {
        code: bundle.text,
        error: '',
      };
    } catch (error: unknown) {
      const { message } = error as BuildFailure;
      return {
        code: '',
        error: message,
      };
    }
  }
};
