import { FC } from 'react';
import { StyledResizeableBox } from './ResizeableContainer.styled';
import { useDirectionProps } from './hooks/use-direction-props';

interface IResizableContainerProps {
  direction: 'horizontal' | 'vertical';
}

const ResizableContainer: FC<IResizableContainerProps> = ({
  direction,
  children,
}) => {
  const resizableBoxProperties = useDirectionProps(direction);

  return (
    <StyledResizeableBox $direction={direction} {...resizableBoxProperties}>
      {children}
    </StyledResizeableBox>
  );
};

export default ResizableContainer;
