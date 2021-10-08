import { FC, useRef, useEffect } from 'react';
import { html } from './config/base-html';
import { Wrapper, Iframe } from './Preview.styled';
import { wait } from '../../utils/wait';

interface IPreviewProps {
  code: string;
}

const Preview: FC<IPreviewProps> = ({ code }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) iframeRef.current.srcdoc = html;
    const waitTimer = wait(
      () => iframeRef?.current?.contentWindow?.postMessage(code, '*'),
      50,
    );
    return () => clearTimeout(waitTimer);
  }, [code]);

  return (
    <Wrapper>
      <Iframe
        title="preview"
        sandbox="allow-scripts"
        srcDoc={html}
        ref={iframeRef}
      />
    </Wrapper>
  );
};

export default Preview;
