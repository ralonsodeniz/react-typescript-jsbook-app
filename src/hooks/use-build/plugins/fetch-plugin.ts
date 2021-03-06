import axios from 'axios';
import localforage from 'localforage';
import { OnLoadResult, PluginBuild } from 'esbuild-wasm';

const fileCache = localforage.createInstance({
  name: 'filecache',
});

export const fetchPlugin = (inputCode: string | undefined) => ({
  name: 'fetch-plugin',
  setup(build: PluginBuild) {
    build.onLoad({ filter: /(^index\.js$)/ }, () => ({
      loader: 'jsx',
      contents: inputCode,
    }));

    build.onLoad({ filter: /.*/ }, async args => {
      const cacheResult = await fileCache.getItem<OnLoadResult>(args.path);
      if (cacheResult) return cacheResult;
    });


      build.onLoad({ filter: /.css$/ }, async args => {
      const { data, request } = await axios.get<any>(args.path);
      const escaped = data
        .replace(/\n/g, '')
        .replace(/"/g, '\\"')
        .replace(/'/g, "\\'");
      const contents = `
      const style = document.createElement('style');
      style.innerText = '${escaped}';
      document.head.appendChild(style);
      `;
      const result: OnLoadResult = {
        loader: 'jsx',
        contents,
        resolveDir: new URL('./', request.responseURL).pathname,
      };
      await fileCache.setItem(args.path, result);

      return result;
    });

    build.onLoad({ filter: /.*/ }, async args => {
      const { data, request } = await axios.get(args.path);
      const result: OnLoadResult = {
        loader: 'jsx',
        contents: data,
        resolveDir: new URL('./', request.responseURL).pathname,
      };
      await fileCache.setItem(args.path, result);

      return result;
    });
  },
});
