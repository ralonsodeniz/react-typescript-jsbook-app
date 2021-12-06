import { useEffect, FC, useCallback, useMemo } from 'react';
import { useDebounce } from '../../hooks/use-debounce';
import { useAppSelector, useBoundActions } from '../../redux/hooks';
import CodeEditor from './components/code-editor';
import Preview from './components/preview';
import ResizableContainer from '../resizable-container';
import {
  Container,
  ProgressContainer,
  PreviewContainer,
} from './CodeCell.styled';
import { useServiceProvider } from '../../contexts/esbuild-service';
import { makeSelectBundle } from '../../redux/selectors/bundles';
import { makeSelectCumulativeContent } from '../../redux/selectors/cells';
import { ICell } from '../../redux';

interface ICodeCellProps {
  cell: ICell;
}

const CodeCell: FC<ICodeCellProps> = ({ cell }) => {
  const { content, id } = cell;
  const service = useServiceProvider();
  const selectCumulativeContent = useMemo(makeSelectCumulativeContent, []);
  const cumulativeContent = useAppSelector(state =>
    selectCumulativeContent(state, id),
  );
  const selectBundle = useMemo(makeSelectBundle, []);
  const { code, error, loading } = useAppSelector(state =>
    selectBundle(state, id),
  );

  const { updateCell, createBundle } = useBoundActions();

  const handleChange = useCallback(
    (value: string) => updateCell({ id, content: value }),
    [id, updateCell],
  );

  const { debouncedCallback: debouncedChange } = useDebounce(
    handleChange,
    1000,
  );

  useEffect(() => {
    createBundle({ id, content: cumulativeContent, service });
  }, [cumulativeContent, createBundle, id, service]);

  return (
    <ResizableContainer direction="vertical">
      <Container>
        <ResizableContainer direction="horizontal">
          <CodeEditor value={content} onChange={debouncedChange} />
        </ResizableContainer>
        <PreviewContainer>
          {loading ? (
            <ProgressContainer>
              <progress className="progress is-small is-primary" max="100">
                Loading
              </progress>
            </ProgressContainer>
          ) : (
            <Preview code={code} error={error} />
          )}
        </PreviewContainer>
      </Container>
    </ResizableContainer>
  );
};

export default CodeCell;
