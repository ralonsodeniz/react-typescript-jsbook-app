import { ResizeCallbackData } from 'react-resizable';
import { getDirectionProps } from '../config/direction-props';
import { useScreenSizes } from './use-screen-sizes';

export const useDirectionProps = (direction: string) => {
  const { screenHeight, screenWidth, setWidth, width } = useScreenSizes();
  const handleWidth = (data: ResizeCallbackData) => setWidth(data.size.width);

  return getDirectionProps(
    direction,
    screenHeight,
    screenWidth,
    handleWidth,
    width,
  );
};
