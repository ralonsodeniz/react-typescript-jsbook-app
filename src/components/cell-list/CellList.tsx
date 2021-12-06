import { FC, Fragment } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { selectAllCells } from '../../redux/selectors/cells';
import CellListItem from './components/cell-list-item';
import AddCell from '../add-cell';

const CellList: FC = () => {
  const cellList = useAppSelector(selectAllCells);
  const hasCells = cellList.length > 0;

  return (
    <ul>
      <AddCell prevCellId={null} forceVisibility={!hasCells} />
      {cellList.map(cell => (
        <Fragment key={cell.id}>
          <CellListItem cell={cell} />
          <AddCell prevCellId={cell.id} />
        </Fragment>
      ))}
    </ul>
  );
};

export default CellList;
