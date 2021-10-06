import { useState, useEffect, useRef, ChangeEventHandler } from 'react';
import * as esbuild from 'esbuild-wasm';
import GlobalStyle from '../styles/GlobalStyle';
import { unpkgPathPlugin } from '../plugins/unpkg-path-plugin';
import { fetchPlugin } from '../plugins/fetch-plugin';

const App = () => {
  const ref = useRef<any>(null);
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');
  const handleInputChange: ChangeEventHandler<HTMLTextAreaElement> = event => {
    const {
      target: { value },
    } = event;
    setInput(value);
  };
  const handleClick = async () => {
    if (ref.current) {
      const result = await ref.current.build({
        entryPoints: ['index.js'],
        bundle: true,
        write: false,
        plugins: [unpkgPathPlugin(),fetchPlugin(input)],
        define: {
          'process.env.NODE_ENV': 'production',
          global: 'window',
        },
      });
      setCode(result.outputFiles[0].text);
    }
  };

  useEffect(() => {
    const startService = async () => {
      ref.current = await esbuild.startService({
        worker: true,
        wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm',
      });
    };
    startService();
  }, []);

  return (
    <>
      <GlobalStyle />
      <div>
        <textarea value={input} onChange={handleInputChange} />
        <div>
          <button onClick={handleClick}>Submit</button>
        </div>
        <pre>{code}</pre>
      </div>
    </>
  );
};

export default App;
