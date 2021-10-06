import { PluginBuild } from 'esbuild-wasm';

export const unpkgPathPlugin = () => {
  return {
    name: 'unpkg-path-plugin',
    setup(build: PluginBuild) {
      // handle roo entry file of 'index.js'
      build.onResolve({ filter: /(^index\.js$)/ }, () => ({
        path: 'index.js',
        namespace: 'a',
      }));
      // handle relative path in a module
      build.onResolve({ filter: /^\.+\// }, async (args) => ({
        namespace: 'a',
        path: new URL(args.path, 'https://unpkg.com' + args.resolveDir + '/')
          .href,
      }));
      // handle main file of a module
      build.onResolve({ filter: /.*/ }, async (args) => ({
        namespace: 'a',
        path: `https://unpkg.com/${args.path}`,
      }));
    },
  };
};
