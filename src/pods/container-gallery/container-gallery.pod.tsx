import { GalleryComponent } from '@/common/components/gallery/gallery-component';
import { mockContainerCollection } from './container-gallery-data';
import classes from './container.pod.module.css';

export const ContainerGalleryPod = () => {
  return (
    <details className={classes.container} open name="toolsLeft">
      <summary className={classes.title}>Containers</summary>
      <GalleryComponent itemCollection={mockContainerCollection} />
    </details>
  );
};
