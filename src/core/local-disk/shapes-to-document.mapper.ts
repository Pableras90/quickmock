import { ShapeModel } from '../model';
import { QuickMockFileContract } from './local-disk.model';
import { DocumentModel } from '@/core/providers/canvas/canvas.model';

export const mapFromShapesArrayToQuickMockFileDocument = (
  shapes: ShapeModel[]
): QuickMockFileContract => {
  return {
    version: '0.1',
    pages: [
      {
        id: '1',
        name: 'default',
        shapes,
      },
    ],
  };
};

// TODO: in future versions this structure will change
export const mapFromQuickMockFileDocumentToApplicationDocument = (
  fileDocument: QuickMockFileContract
): DocumentModel => {
  return {
    shapes: fileDocument.pages[0].shapes,
  };
};
