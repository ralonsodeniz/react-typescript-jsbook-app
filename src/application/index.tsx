import { Provider } from 'react-redux';
import GlobalStyle from '../styles/GlobalStyle';
import { store } from '../redux';
import CellList from '../components/cell-list';
import EsbuildServiceProvider from "../contexts/esbuild-service";

const App = () => (
  <Provider store={store}>
    <EsbuildServiceProvider>
      <GlobalStyle />
      <CellList />
    </EsbuildServiceProvider>
  </Provider>
);


export default App;
