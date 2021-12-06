import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100% - 10px);
  display: flex;
  flex-direction: row;
`;

export const PreviewContainer =  styled.div`
  background-color: white;
  position: relative;
  height: 100%;
  flex: 1;
  display: flex;
`;

export const ProgressContainer = styled.div`
  align-self: center;
  padding-left: 4%;
  padding-right: 4%;
  width: 100%;
`;
