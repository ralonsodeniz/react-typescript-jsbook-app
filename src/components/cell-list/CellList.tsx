import { FC } from 'react';
import { Service } from 'esbuild-wasm';
import { useAppSelector } from '../../redux/hooks';
import { selectCellsList } from '../../redux/selectors/cells';
import CellListItem from './components/cell-list-item';

interface ICellListProps {
  service: Service | null;
}

const CellList: FC<ICellListProps> = ({ service }) => {
  const cellList = useAppSelector(selectCellsList);

  return (
    <ul>
      {cellList.map(cell => (
        <CellListItem cell={cell} key={cell.id} service={service}/>
      ))}
    </ul>
  );
};

export default CellList;
