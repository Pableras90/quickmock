import { saveFileModern } from '@/common/export';
import { useCanvasContext } from '../providers';
import {
  mapFromQuickMockFileDocumentToApplicationDocument,
  mapFromShapesArrayToQuickMockFileDocument,
} from './shapes-to-document.mapper';
import { fileInput, OnFileSelectedCallback } from '@/common/file-input';
import { QuickMockFileContract } from './local-disk.model';

const DEFAULT_FILE_NAME = 'mymockui';
const DEFAULT_FILE_EXTENSION = 'qm';
const DEFAULT_EXTENSION_DESCRIPTION = 'quick mock';

export const useLocalDisk = () => {
  const { shapes, loadDocument } = useCanvasContext();

  const serializeShapes = (): string => {
    const quickMockDocument = mapFromShapesArrayToQuickMockFileDocument(shapes);
    return JSON.stringify(quickMockDocument);
  };

  const OldBrowsersDownloadFile = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.qm`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const newBrowsersDownloadFile = async (filename: string, content: string) => {
    const savedFilename = await saveFileModern(
      {
        filename,
        extension: DEFAULT_FILE_EXTENSION,
        description: DEFAULT_EXTENSION_DESCRIPTION,
      },
      content
    );
    console.log('saveFilename', savedFilename);
  };

  const handleSave = () => {
    const filename = DEFAULT_FILE_NAME;
    const content = serializeShapes();
    if (window.showDirectoryPicker === undefined) {
      OldBrowsersDownloadFile(filename, content);
    } else {
      newBrowsersDownloadFile(filename, content);
    }
  };

  // 1. Como el input confile input (que viene del input con type file)
  // Recibo como parametro un file
  const handleFileSelected: OnFileSelectedCallback = file => {
    // 2. Para leer el fichero tengo que usar FileReader
    const reader = new FileReader();

    // 3. FileReader es asincrono, yo arranco a leer el fichero
    // pero no lo tengo justo despues de llamar a la función
    // Me suscribo al evento onload para saber cuando el fichero
    // se ha leido y esta disponible
    reader.onload = () => {
      const content = reader.result as string;
      const parsedData: QuickMockFileContract = JSON.parse(content);
      const appDocument =
        mapFromQuickMockFileDocumentToApplicationDocument(parsedData);
      loadDocument(appDocument);
    };

    // 4. Le digo al reader que lea el fichero como texto (esto es asincrono)
    reader.readAsText(file);
  };

  const handleLoad = () => {
    fileInput(handleFileSelected);
  };

  return {
    handleSave,
    handleLoad,
  };
};
