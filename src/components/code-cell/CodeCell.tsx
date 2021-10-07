import { useState, FC } from 'react';
import { Service } from 'esbuild-wasm';
import { useBuild } from '../../hooks/use-build';
import CodeEditor from '../code-editor';
import Preview from '../preview';

interface ICodeCellProps {
  service: Service | null;
}

const CodeCell: FC<ICodeCellProps> = ({ service }) => {
  const [input, setInput] = useState('');
  const handleEditorChange = (value: string) => setInput(value);
  const { code, handleBuild } = useBuild(input, service);

  return (
    <>
      <CodeEditor initialValue={input} onChange={handleEditorChange} />
      <div>
        <button onClick={handleBuild}>Submit</button>
      </div>
      <Preview code={code} />
    </>
  );
};

export default CodeCell;
