import styled from 'styled-components';

interface IContainerProps {
  $forceVisibility: boolean | undefined;
}

export const Container = styled.div<IContainerProps>`
  position: relative;
  opacity: ${({ $forceVisibility }) => ($forceVisibility ? 1 : 0)};
  transition: opacity 0.3s ease-in 0.1s;
  margin: 10px 0;
  &:hover {
    opacity: 1;
  }
`;

export const Button = styled.button``;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  button + button {
    margin-left: 50px;
  }
`;

export const Divider = styled.div`
  position: absolute;
  top: 50%;
  bottom: 50%;
  border-bottom: 1px solid gray;
  width: 95%;
  left: 2.5%;
  right: 2.5%;
  z-index: -1;
`;
