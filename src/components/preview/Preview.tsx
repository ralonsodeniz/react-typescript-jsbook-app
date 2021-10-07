import { FC, useRef, useEffect } from 'react';
import { html } from './config/base-html';

interface IPreviewProps {
  code: string;
}

const Preview: FC<IPreviewProps> = ({ code }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.srcdoc = html;
      iframeRef.current.contentWindow?.postMessage(
        code,
        '*',
      );
    }
  }, [code]);

  return (
    <iframe
      title="preview"
      sandbox="allow-scripts"
      srcDoc={html}
      ref={iframeRef}
    />
  );
};

export default Preview;
