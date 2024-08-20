import { SaveIcon } from '@/common/components/icons/save-icon.component';
import classes from '@/pods/toolbar/toolbar.pod.module.css';
import { ToolbarButton } from '../toolbar-button';
import { useCanvasContext } from '@/core/providers';
import { saveFileModern } from '@/common/export';

const DEFAULT_FILE_NAME = 'mymockui';
const DEFAULT_FILE_EXTENSION = 'qm';
const DEFAULT_EXTENSION_DESCRIPTION = 'QuicMock files';

export const SaveButton: React.FC = () => {
  //const { fileName, setFileName } = useCanvasContext();

  const { shapes } = useCanvasContext();

  const serializeShapes = (): string => {
    return JSON.stringify(shapes);
  };

  const OldBrowsersDownloadFile = (filename: string) => {
    const blob = new Blob([serializeShapes()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.qm`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const newBrowsersDownloadFile = async (filename: string) => {
    const content = serializeShapes();

    const savedFilename = await saveFileModern(
      {
        filename,
        extension: DEFAULT_FILE_EXTENSION,
        description: DEFAULT_EXTENSION_DESCRIPTION,
      },
      content
    );

    console.log('savedFilename', savedFilename);
  };

  const saveFile = () => {
    const filename = DEFAULT_FILE_NAME;

    if (window.showDirectoryPicker === undefined) {
      OldBrowsersDownloadFile(filename);
    } else {
      // Implementalo para Chrome con lo moderno
      newBrowsersDownloadFile(filename);
    }
  };

  return (
    <ToolbarButton
      onClick={saveFile}
      className={classes.button}
      icon={<SaveIcon />}
      label="Save"
    />
  );
};
