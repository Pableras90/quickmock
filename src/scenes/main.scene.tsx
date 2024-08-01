import { MainLayout } from '@/layout/main.layout';
import classes from './main.module.css';

import {
  CanvasPod,
  ToolbarPod,
  ContainerGalleryPod,
  ComponentGalleryPod,
} from '@/pods';
import { PropertiesPod } from '@/pods/properties';

export const MainScene = () => {
  return (
    <MainLayout>
      <ToolbarPod />
      <div className={classes.toolsLeft}>
        <ContainerGalleryPod />
        <ComponentGalleryPod />
      </div>
      <div className={classes.toolsRight}>
        <PropertiesPod />
      </div>
      <CanvasPod />
    </MainLayout>
  );
};
