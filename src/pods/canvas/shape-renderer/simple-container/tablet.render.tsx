import { TabletShape } from '@/common/components/front-containers';
import { ShapeRendererProps } from '../model';
import { ShapeModel } from '@/core/model';

export const renderTablet = (
  shape: ShapeModel,
  shapeRenderedProps: ShapeRendererProps
) => {
  const { handleSelected, shapeRefs, handleDragEnd, handleTransform } =
    shapeRenderedProps;

  return (
    <TabletShape
      id={shape.id}
      key={shape.id}
      x={shape.x}
      y={shape.y}
      draggable
      width={shape.width}
      height={shape.height}
      onSelected={handleSelected}
      ref={shapeRefs.current[shape.id]}
      onDragEnd={handleDragEnd(shape.id)}
      onTransform={handleTransform}
      onTransformEnd={handleTransform}
    />
  );
};
