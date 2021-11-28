import { useEffect, FC } from 'react';
import { Service } from 'esbuild-wasm';
import { useBuild } from '../../hooks/use-build';
import { useDebounce } from '../../hooks/use-debounce';
import { useBoundActions } from '../../redux/hooks';
import CodeEditor from './components/code-editor';
import Preview from './components/preview';
import ResizableContainer from '../resizable-container';
import { ICell } from '../../redux';
import { Container } from './CodeCell.styled';

interface ICodeCellProps {
  service: Service | null;
  cell: ICell;
}

const CodeCell: FC<ICodeCellProps> = ({ service, cell }) => {
  const { id, content } = cell;
  const { code, error, handleBuild } = useBuild(content, service);
  const { debouncedCallback: debouncedHandleBuild } = useDebounce(
    handleBuild,
    1000,
  );
  const { updateCell } = useBoundActions();
  const handleChange = (value: string) => updateCell({ id, content: value });

  useEffect(() => {
    debouncedHandleBuild();
  }, [content, debouncedHandleBuild]);

  return (
    <ResizableContainer direction="vertical">
      <Container>
        <ResizableContainer direction="horizontal">
          <CodeEditor initialValue={content} onChange={handleChange} />
        </ResizableContainer>
        <Preview code={code} error={error} />
      </Container>
    </ResizableContainer>
  );
};

export default CodeCell;
