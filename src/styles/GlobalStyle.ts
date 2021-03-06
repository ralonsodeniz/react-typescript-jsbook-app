import { createGlobalStyle } from 'styled-components';
import { PreviewContainer } from '../components/code-cell/CodeCell.styled';

export default createGlobalStyle`
  .react-resizable-handle {
    display: block;
    background-color: #37414b;
    background-repeat: no-repeat;
    background-position: 50%;
  }

  .react-resizable-handle-s {
    height: 10px;
    width: 100%;
    cursor: row-resize;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=');
  }

  .react-resizable-handle-e {
    width: 10px;
    min-width: 10px;
    height: 100%;
    cursor: col-resize;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==');
  }

  .react-draggable-transparent-selection {
    ${PreviewContainer}:after {
      content: '';
      position: absolute;
      top:0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  }

  .mtk1 {
    color: #d4d4d4;
  }
  .mtk2 {
    color: #1e1e1e;
  }
  .mtk3 {
    color: #000080;
  }
  .mtk4 {
    color: #6a9955;
  }
  .mtk5 {
    color: #569cd6;
  }
  .mtk6 {
    color: #b5cea8;
  }
  .mtk7 {
    color: #646695;
  }
  .mtk8 {
    color: #c586c0;
  }
  .mtk9 {
    color: #9cdcfe;
  }
  .mtk10 {
    color: #f44747;
  }
  .mtk11 {
    color: #ce9178;
  }
  .mtk12 {
    color: #6796e6;
  }
  .mtk13 {
    color: #808080;
  }
  .mtk14 {
    color: #d16969;
  }
  .mtk15 {
    color: #dcdcaa;
  }
  .mtk16 {
    color: #4ec9b0;
  }
  .mtk17 {
    color: #c586c0;
  }
  .mtk18 {
    color: #4fc1ff;
  }
  .mtk19 {
    color: #c8c8c8;
  }
  .mtk20 {
    color: #cd9731;
  }
  .mtk21 {
    color: #b267e6;
  }
  .mtki {
    font-style: italic;
  }
  .mtkb {
    font-weight: bold;
  }
  .mtku {
    text-decoration: underline;
    text-underline-position: under;
  }

  .mtk100.Identifier.JsxElement.Bracket {
    color: #0080ff !important;
  }

  .mtk1000.Identifier.JsxOpeningElement.Bracket {
    color: #808080;
    font-weight: bold;
  }

  .mtk1001.Identifier.JsxClosingElement.Bracket {
    color: #808080;
    font-weight: lighter;
  }

  .mtk101.Identifier.JsxOpeningElement.Identifier {
    color: #569cd6;
  }

  .mtk102.Identifier.JsxClosingElement.Identifier {
    color: #569cd6;
    font-weight: lighter;
  }

  .mtk103.Identifier.JsxAttribute.Identifier {
    color: #9cdcfe;
  }

  .mtk104.JsxElement.JsxText {
    color: darkgoldenrod;
  }

  .mtk105.glyph.Identifier.JsxElement {
    background: #61dafb;
    opacity: 0.25;
  }

  .mtk12.Identifier.JsxExpression.JsxClosingElement {
    color: #ec5f67;
  }

  .mtk12.Identifier.JsxSelfClosingElement {
    color: #ec5f67;
  }
  .mtk12.Identifier.VariableStatement.JsxClosingElement {
    color: #ec5f67 !important;
  }
  .mtk12.VariableStatement.JsxSelfClosingElement.Identifier {
    color: #ec5f67;
  }
  .mtk12.Identifier.JsxAttribute.VariableDeclaration {
    color: crimson;
  }
  .mtk12.JsxExpression.VariableStatement {
    color: #fac863;
  }
  .mtk12.VariableStatement.JsxSelfClosingElement {
    color: #ede0e0;
  }
  .mtk12.VariableStatement.JsxClosingElement {
    color: #ede0e0;
  }
  .JsxText {
    color: #0c141f;
  }

`;
