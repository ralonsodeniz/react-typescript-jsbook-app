import { ResizableProps, ResizeCallbackData } from 'react-resizable';
import {
  getMaxHorizontalSize,
  getMaxVerticalSize,
  getMinHorizontalSize,
  getMinVerticalSize,
} from './sizes';

interface IResizablePropsOptions {
  [key: string]: (
    screenWidth: number,
    screenHeight: number,
    onResize: (data: ResizeCallbackData) => void,
    width: number,
  ) => ResizableProps;
}

const resizablePropsOptions: IResizablePropsOptions = {
  vertical: (_, screenHeight) => ({
    height: getMinVerticalSize(screenHeight),
    width: Infinity,
    resizeHandles: ['s'],
    maxConstraints: [Infinity, getMaxVerticalSize(screenHeight)],
    minConstraints: [Infinity, getMinVerticalSize(screenHeight)],
  }),
  horizontal: (screenWidth,_,onResize, width) => ({
    height: Infinity,
    width,
    resizeHandles: ['e'],
    maxConstraints: [getMaxHorizontalSize(screenWidth), Infinity],
    minConstraints: [getMinHorizontalSize(screenWidth), Infinity],
    onResizeStop: (event, data) => onResize(data),
  }),
};

export const getDirectionProps = (
  direction: string,
  screenHeight: number,
  screenWidth: number,
  onResize: (data: ResizeCallbackData) => void,
  width: number,
) => resizablePropsOptions[direction](screenWidth, screenHeight, onResize, width);
