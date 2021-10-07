import { useStartService } from '../hooks/use-start-service';
import CodeCell from '../components/code-cell';

const App = () => {
  const service = useStartService();

  return (
    <>
      <CodeCell service={service} />
      <CodeCell service={service} />
    </>
  );
};

export default App;
