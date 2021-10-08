import { useState, useEffect, FC } from 'react';
import { Service } from 'esbuild-wasm';
import { useBuild } from '../../hooks/use-build';
import CodeEditor from '../code-editor';
import Preview from '../preview';
import ResizableContainer from '../resizable-container';
import { Container } from './CodeCell.styled';
import { useDebounce } from '../../hooks/use-debounce';

interface ICodeCellProps {
  service: Service | null;
}

const CodeCell: FC<ICodeCellProps> = ({ service }) => {
  const [input, setInput] = useState('');
  const { code, error, handleBuild } = useBuild(input, service);
  const { debouncedCallback: debouncedHandleBuild } = useDebounce(
    handleBuild,
    1000,
  );

  useEffect(() => {
    debouncedHandleBuild();
  }, [input, debouncedHandleBuild]);

  return (
    <ResizableContainer direction="vertical">
      <Container>
        <ResizableContainer direction="horizontal">
          <CodeEditor initialValue={input} onChange={setInput} />
        </ResizableContainer>
        <Preview code={code} error={error} />
      </Container>
    </ResizableContainer>
  );
};

export default CodeCell;
