import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  opacity: 0.25;
  transition: opacity .3s;
  &:hover {
    opacity: 1;
  }
`;
