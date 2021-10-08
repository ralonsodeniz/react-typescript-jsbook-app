import styled from 'styled-components';

export const Button = styled.button`
  position: absolute !important;
  top: 5px;
  right: 5px;
  z-index: 20;
  opacity: 0;
  transition: opacity 0.3s;
`;

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: calc(100% - 10px);
  &:hover {
    ${Button} {
      opacity: 1;
    }
  }
`;
