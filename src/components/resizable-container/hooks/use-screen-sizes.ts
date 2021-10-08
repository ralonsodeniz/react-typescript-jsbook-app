import { useState, useCallback } from 'react';
import { useResize } from '../../../hooks/use-resize';
import { getMaxHorizontalSize } from '../config/sizes';

export const useScreenSizes = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(getMaxHorizontalSize(screenWidth));

  const handleScreenResize = useCallback(() => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
    if (getMaxHorizontalSize(window.innerWidth) < width)
      setWidth(getMaxHorizontalSize(window.innerWidth));
  }, [width]);
  useResize(handleScreenResize);

  return { screenHeight, screenWidth, width, setWidth };
};
