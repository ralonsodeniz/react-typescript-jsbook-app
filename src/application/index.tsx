import { useStartService } from '../hooks/use-start-service';
import CodeCell from '../components/code-cell';
import GlobalStyle from '../styles/GlobalStyle';

const App = () => {
  const service = useStartService();

  return (
    <>
      <GlobalStyle />
      <CodeCell service={service} />
    </>
  );
};

export default App;
