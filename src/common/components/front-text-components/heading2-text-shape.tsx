import { forwardRef } from 'react';
import { Group, Text } from 'react-konva';
import { ShapeProps } from '../front-components/shape.model';
import { ShapeSizeRestrictions } from '@/core/model';
import { fitSizeToShapeSizeRestrictions } from '@/common/utils/shapes/shape-restrictions';

const heading2SizeRestrictions: ShapeSizeRestrictions = {
  minWidth: 150,
  minHeight: 20,
  maxWidth: -1,
  maxHeight: -1,
  defaultWidth: 150,
  defaultHeight: 25,
};

export const getHeading2SizeRestrictions = (): ShapeSizeRestrictions =>
  heading2SizeRestrictions;

export const Heading2Shape = forwardRef<any, ShapeProps>(
  (
    { x, y, width, height, id, onSelected, text, otherProps, ...shapeProps },
    ref
  ) => {
    const { width: restrictedWidth, height: restrictedHeight } =
      fitSizeToShapeSizeRestrictions(heading2SizeRestrictions, width, height);

    return (
      <Group
        x={x}
        y={y}
        width={restrictedWidth}
        height={restrictedHeight}
        ref={ref}
        {...shapeProps}
        onClick={() => onSelected(id, 'label')}
      >
        <Text
          x={0}
          y={0}
          width={restrictedWidth}
          height={restrictedHeight}
          text={text}
          fontFamily="Comic Sans MS, cursive"
          fontSize={25}
          fill={otherProps?.textColor ?? 'black'}
          align="center"
          verticalAlign="middle"
          ellipsis={true}
          wrap="none"
        />
      </Group>
    );
  }
);

export default Heading2Shape;
