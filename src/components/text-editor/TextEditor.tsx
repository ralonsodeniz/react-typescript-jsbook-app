import { useState, useRef, FC } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Wrapper, Card } from './TextEditor.styled';
import { useClickOutside } from '../../hooks/use-click-outside';

const TextEditor: FC = () => {
  const [editing, setEditing] = useState(false);
  const [source, setSource] = useState('Hello World');
  const editorRef = useRef<HTMLDivElement | null>(null);
  const handleOpenEditMode = () => setEditing(true);
  const handleCloseEditMode = () => setEditing(false);
  const handleEditorChange = (value: string | undefined) =>
    setSource(value ?? '');
  useClickOutside([editorRef], handleCloseEditMode);

  return editing ? (
    <Wrapper ref={editorRef}>
      <MDEditor value={source} onChange={handleEditorChange} />
    </Wrapper>
  ) : (
    <Wrapper onClick={handleOpenEditMode} className="card">
      <Card>
        <MDEditor.Markdown source={source as string} className="card-content" />
      </Card>
    </Wrapper>
  );
};

export default TextEditor;
