import { useStartService } from '../hooks/use-start-service';
import GlobalStyle from '../styles/GlobalStyle';
import CodeCell from '../components/code-cell';
import TextEditor from '../components/text-editor';

const App = () => {
  const service = useStartService();

  return (
    <>
      <GlobalStyle />
      <TextEditor />
      <CodeCell service={service} />
    </>
  );
};

export default App;
