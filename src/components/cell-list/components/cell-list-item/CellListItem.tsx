import { FC } from 'react';
import { CELL_TYPES, ICell } from '../../../../redux';
import CodeCell from '../../../code-cell';
import TextEditor from '../../../text-editor';
import ActionBar from '../action-bar';
import { Container, ActionBarContainer } from './CellListItem.styled';

interface ICellListItemProps {
  cell: ICell;
}

const CellListItem: FC<ICellListItemProps> = ({ cell }) => {
  return (
    <Container>
      {cell.type === CELL_TYPES.CODE ? (
        <>
          <ActionBarContainer>
            <ActionBar id={cell.id} />
          </ActionBarContainer>
          <CodeCell cell={cell} />
        </>
      ) : (
        <>
          <TextEditor cell={cell} />
          <ActionBar id={cell.id} />
        </>
      )}
    </Container>
  );
};

export default CellListItem;
