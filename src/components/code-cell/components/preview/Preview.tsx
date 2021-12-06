import { FC, useRef, useEffect } from 'react';
import { html } from './config/base-html';
import { Iframe } from './Preview.styled';
import { wait } from '../../../../utils/wait';

interface IPreviewProps {
  code: string | undefined;
  error: string | undefined;
}

const Preview: FC<IPreviewProps> = ({ code, error }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) iframeRef.current.srcdoc = html;
    const waitTimer = wait(
      () => iframeRef?.current?.contentWindow?.postMessage(error || code, '*'),
      50,
    );
    return () => clearTimeout(waitTimer);
  }, [code, error]);

  return (
    <Iframe
      title="preview"
      sandbox="allow-scripts"
      srcDoc={html}
      ref={iframeRef}
    />
  );
};

export default Preview;
