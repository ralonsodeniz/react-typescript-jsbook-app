import styled from 'styled-components';

export const Wrapper = styled.div`
  .w-md-editor .title {
    line-height: unset;
    font-size: unset;
    font-weight: unset;
    color: #d4d4d4 !important;
  }

  .w-md-editor ul {
    line-height: 1;
  }

  .w-md-editor-bar svg {
    display: none;
  }

  .w-md-editor-bar {
    height: 11px;
    cursor: row-resize;
    background: #37414b
      url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=')
      50% no-repeat;
    width: 100%;
    position: relative;
  }

  em {
    font-style: italic;
  }

  .w-mde-markdown hr {
    border-top: 1px solid #dee5ed;
  }

  .w-mde-markdown ol {
    list-style: decimal;
  }

  .w-md-editor-show-live {
    z-index: 20;
  }

  .w-md-editor-toolbar {
    background-color: #37414b;
    border-bottom: 1px solid gray;
  }

  .w-md-editor-toolbar li button {
    color: #d4d4d4;
  }

  .w-md-editor-content {
    background-color: #202123;
  }

  .w-md-editor,
  .w-md-editor .w-md-editor-text-pre {
    color: #d4d4d4;
  }

  .w-md-editor-text-pre .bold {
    color: unset;
  }

  .token.list.punctuation {
    background-color: unset;
  }

  .w-md-editor-toolbar li.active > button {
    color: #06c !important;
  }
`;

export const Card = styled.div``
