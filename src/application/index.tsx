import { Provider } from 'react-redux';
import { useStartService } from '../hooks/use-start-service';
import GlobalStyle from '../styles/GlobalStyle';
import CodeCell from '../components/code-cell';
import TextEditor from '../components/text-editor';
import { store } from '../redux';

const App = () => {
  const service = useStartService();

  return (
    <Provider store={store}>
      <GlobalStyle />
      <TextEditor />
      <CodeCell service={service} />
    </Provider>
  );
};

export default App;
