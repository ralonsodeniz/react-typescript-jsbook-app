import { Provider } from 'react-redux';
import { useStartService } from '../hooks/use-start-service';
import GlobalStyle from '../styles/GlobalStyle';
import { store } from '../redux';
import CellList from '../components/cell-list';

const App = () => {
  const service = useStartService();

  return (
    <Provider store={store}>
      <GlobalStyle />
      <CellList service={service} />
    </Provider>
  );
};

export default App;
