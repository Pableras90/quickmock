import { ItemComponent } from './components/item-component';
import { ItemInfo } from './components/model';
import React from 'react';

interface Props {
  itemCollection: ItemInfo[];
}

export const GalleryComponent: React.FC<Props> = props => {
  const { itemCollection } = props;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {itemCollection.map((item, index) => (
        <ItemComponent key={index} item={item} />
      ))}
    </div>
  );
};
