import { useEffect } from 'react';
import { useDebounce } from './use-debounce';

export const useResize = (callback: () => void, dbTime?: number) => {
  const { debouncedCallback } = useDebounce(callback, dbTime);
  useEffect(() => {
    window.addEventListener('resize', debouncedCallback);
    return () => {
      window.removeEventListener('resize', debouncedCallback);
    };
  }, [dbTime, debouncedCallback]);
};
