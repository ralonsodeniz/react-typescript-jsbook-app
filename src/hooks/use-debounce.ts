import { useRef, useCallback, useEffect } from 'react';

type TSetTimeout = ReturnType<typeof setTimeout>;

export const useDebounce = (callback: () => void, dbTime: number = 250) => {
  const timer = useRef<TSetTimeout>();
  const cancelDebounce = useCallback(
    () => clearTimeout(timer.current as TSetTimeout),
    [],
  );
  const debouncedCallback = useCallback(() => {
    if (timer.current) cancelDebounce();
    timer.current = setTimeout(callback, dbTime);
  }, [callback, dbTime, cancelDebounce]);

  useEffect(() => {
    return () => cancelDebounce();
  }, [cancelDebounce]);

  return { debouncedCallback, cancelDebounce };
};
