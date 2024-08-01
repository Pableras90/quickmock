import classes from './component.pod.module.css';
import { GalleryComponent } from '@/common/components/gallery/gallery-component';
import { mockWidgetCollection } from './component-gallery-data';

export const ComponentGalleryPod = () => {
  return (
    <details className={classes.component} name="toolsLeft">
      <summary className={classes.title}>Components</summary>
      <GalleryComponent itemCollection={mockWidgetCollection} />
    </details>
  );
};
