import { MutableRefObject, useEffect } from 'react';

export const useClickOutside = (
  refs: MutableRefObject<HTMLDivElement | null>[],
  callback: () => void,
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const { target } = event;
      if (
        !refs.some(
          ref => ref.current && target && ref.current?.contains(target as Node),
        )
      )
        callback();
    };
    // this is the same as bellow document.addEventListener('click', listener, { capture: true });
    // but using useCapture param instead of properties object
    document.addEventListener('click', listener, true);
    return () => {
      document.removeEventListener('click', listener, true);
    };
  }, [callback, refs]);
};
