import { useState, useRef, FC } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Wrapper, Card } from './TextEditor.styled';
import { useClickOutside } from '../../hooks/use-click-outside';
import { useBoundActions } from '../../redux/hooks';
import { ICell } from '../../redux';

interface ITextEditorProps {
  cell: ICell;
}

const TextEditor: FC<ITextEditorProps> = ({ cell }) => {
  const { content, id } = cell;
  const [editing, setEditing] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);
  const { updateCell } = useBoundActions();
  const handleOpenEditMode = () => setEditing(true);
  const handleCloseEditMode = () => setEditing(false);
  const handleEditorChange = (value: string | undefined) =>
    updateCell({ content: value, id });
  useClickOutside([editorRef], handleCloseEditMode);

  return editing ? (
    <Wrapper ref={editorRef}>
      <MDEditor value={content} onChange={handleEditorChange} />
    </Wrapper>
  ) : (
    <Wrapper onClick={handleOpenEditMode} className="card">
      <Card>
        <MDEditor.Markdown
          source={content || 'Click to edit...'}
          className="card-content"
        />
      </Card>
    </Wrapper>
  );
};

export default TextEditor;
