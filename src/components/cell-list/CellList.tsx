import { FC, Fragment } from 'react';
import { Service } from 'esbuild-wasm';
import { useAppSelector } from '../../redux/hooks';
import { selectCellsList } from '../../redux/selectors/cells';
import CellListItem from './components/cell-list-item';
import AddCell from '../add-cell';

interface ICellListProps {
  service: Service | null;
}

const CellList: FC<ICellListProps> = ({ service }) => {
  const cellList = useAppSelector(selectCellsList);
  const hasCells = cellList.length > 0;

  return (
    <ul>
      <AddCell prevCellId={null} forceVisibility={!hasCells} />
      {cellList.map(cell => (
        <Fragment key={cell.id}>
          <CellListItem cell={cell} service={service} />
          <AddCell prevCellId={cell.id} />
        </Fragment>
      ))}
    </ul>
  );
};

export default CellList;
