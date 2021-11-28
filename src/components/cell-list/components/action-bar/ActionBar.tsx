import { FC } from 'react';
import { useBoundActions } from '../../../../redux/hooks';
import { CellDirections, TCellDirection } from '../../../../redux';
import { Container } from './ActionBar.styled';

interface IActionBarProps {
  id: string;
}

const ActionBar: FC<IActionBarProps> = ({ id }) => {
  const { deleteCell, moveCell } = useBoundActions();
  const handleMoveCell = (direction: TCellDirection) =>
    moveCell({ id, direction });
  const handleDeleteCell = () => deleteCell(id);

  return (
    <Container>
      <button
        className="button is-primary is-small"
        onClick={() => handleMoveCell(CellDirections.UP)}
      >
        <span className="icon">
          <i className="fas fa-arrow-up" />
        </span>
      </button>
      <button
        className="button is-primary is-small"
        onClick={() => handleMoveCell(CellDirections.DOWN)}
      >
        <span className="icon">
          <i className="fas fa-arrow-down" />
        </span>
      </button>
      <button className="button is-primary is-small" onClick={handleDeleteCell}>
        <span className="icon">
          <i className="fas fa-trash" />
        </span>
      </button>
    </Container>
  );
};

export default ActionBar;
