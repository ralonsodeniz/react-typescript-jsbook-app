import { FC } from 'react';
import { useBoundActions } from '../../redux/hooks';
import { CELL_TYPES } from '../../redux';
import { TRANSLATIONS } from '../cell-list/components/action-bar/translations';
import { Container, Divider, ButtonsContainer } from './AddCell.styled';

interface IAddCellProps {
  prevCellId: string | null;
  forceVisibility?: boolean;
}

const AddCell: FC<IAddCellProps> = ({ prevCellId, forceVisibility }) => {
  const { insertCellAfter } = useBoundActions();

  const handleAddCodeCell = () => insertCellAfter(CELL_TYPES.CODE, prevCellId);

  const handleAddTextCell = () => insertCellAfter(CELL_TYPES.TEXT, prevCellId);

  return (
    <Container $forceVisibility={forceVisibility}>
      <ButtonsContainer>
        <button
          className="button is-primary is-small is-rounded"
          onClick={handleAddCodeCell}
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
          <span>{TRANSLATIONS.CODE}</span>
        </button>
        <button
          className="button is-primary is-small is-rounded"
          onClick={handleAddTextCell}
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
          <span>{TRANSLATIONS.TEXT}</span>
        </button>
      </ButtonsContainer>
      <Divider />
    </Container>
  );
};

export default AddCell;
