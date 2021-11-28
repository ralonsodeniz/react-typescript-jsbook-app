import { FC } from 'react';
import { Service } from 'esbuild-wasm';
import { CellTypes, ICell } from '../../../../redux';
import CodeCell from '../../../code-cell';
import TextEditor from '../../../text-editor';
import ActionBar from '../action-bar';
import { Container, ActionBarContainer } from './CellListItem.styled';

interface ICellListItemProps {
  cell: ICell;
  service: Service | null;
}

const CellListItem: FC<ICellListItemProps> = ({ cell, service }) => {
  return (
    <Container>
      {cell.type === CellTypes.CODE ? (
        <>
          <ActionBarContainer>
            <ActionBar id={cell.id} />
          </ActionBarContainer>
          <CodeCell service={service} cell={cell} />
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
