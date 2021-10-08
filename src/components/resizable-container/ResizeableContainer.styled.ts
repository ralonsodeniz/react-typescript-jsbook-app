import styled, { css } from 'styled-components';
import { ResizableBox } from 'react-resizable';

interface IStyledResizeableBoxProps {
  readonly $direction: string;
}

const horizontalStyles = css`
  display: flex;
  flex-direction: row;
`;

export const StyledResizeableBox = styled(ResizableBox)<IStyledResizeableBoxProps>`
  ${({ $direction }) => $direction === 'horizontal' && horizontalStyles}
`;
