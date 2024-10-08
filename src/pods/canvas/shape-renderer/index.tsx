import { ShapeModel } from '@/core/model';
import { ShapeRendererProps } from './model';
import {
  renderComboBox,
  renderInput,
  renderTextArea,
  renderNotFound,
  renderButton,
  renderToggleSwitch,
  renderCheckbox,
  renderProgressbar,
  renderListbox,
  renderDatepickerinput,
  renderTimepickerinput,
  renderLabel,
  renderRadioButton,
  renderIcon,
} from './simple-component';
import {
  renderBrowserWindow,
  renderMobilePhoneContainer,
  renderTablet,
} from './simple-container';
import {
  renderVideoPlayer,
  renderAccordion,
  renderHorizontalMenu,
  renderPieChart,
  renderMapChart,
  renderBreadcrumb,
  renderBarChart,
  renderLineChart,
} from './simple-rich-components';
import {
  renderDiamond,
  renderTriangle,
  renderRectangle,
  renderLine,
  renderCircle,
  renderStar,
  renderPostit,
  renderLargeArrowShape,
} from './simple-basic-shapes';
import {
  renderHeading1,
  renderHeading2,
  renderHeading3,
  renderNormaltext,
} from './simple-text-components';
import { renderSmalltext } from './simple-text-components/smalltext.renderer';
import { renderParagraph } from './simple-text-components/paragraph.renderer';
import { renderImage } from './simple-basic-shapes/image.renderer';

export const renderShapeComponent = (
  shape: ShapeModel,
  shapeRenderedProps: ShapeRendererProps
) => {
  switch (shape.type) {
    case 'combobox':
      return renderComboBox(shape, shapeRenderedProps);
    case 'input':
      return renderInput(shape, shapeRenderedProps);
    case 'button':
      return renderButton(shape, shapeRenderedProps);
    case 'checkbox':
      return renderCheckbox(shape, shapeRenderedProps);
    case 'textarea':
      return renderTextArea(shape, shapeRenderedProps);
    case 'toggleswitch':
      return renderToggleSwitch(shape, shapeRenderedProps);
    case 'progressbar':
      return renderProgressbar(shape, shapeRenderedProps);
    case 'listbox':
      return renderListbox(shape, shapeRenderedProps);
    case 'datepickerinput':
      return renderDatepickerinput(shape, shapeRenderedProps);
    case 'browser':
      return renderBrowserWindow(shape, shapeRenderedProps);
    case 'tablet':
      return renderTablet(shape, shapeRenderedProps);
    case 'timepickerinput':
      return renderTimepickerinput(shape, shapeRenderedProps);
    case 'mobilePhone':
      return renderMobilePhoneContainer(shape, shapeRenderedProps);
    case 'label':
      return renderLabel(shape, shapeRenderedProps);
    case 'radiobutton':
      return renderRadioButton(shape, shapeRenderedProps);
    case 'rectangle':
      return renderRectangle(shape, shapeRenderedProps);
    case 'postit':
      return renderPostit(shape, shapeRenderedProps);
    case 'videoPlayer':
      return renderVideoPlayer(shape, shapeRenderedProps);
    case 'pie':
      return renderPieChart(shape, shapeRenderedProps);
    case 'map':
      return renderMapChart(shape, shapeRenderedProps);
    case 'linechart':
      return renderLineChart(shape, shapeRenderedProps);
    case 'diamond':
      return renderDiamond(shape, shapeRenderedProps);
    case 'line':
      return renderLine(shape, shapeRenderedProps);
    case 'accordion':
      return renderAccordion(shape, shapeRenderedProps);
    case 'triangle':
      return renderTriangle(shape, shapeRenderedProps);
    case 'horizontal-menu':
      return renderHorizontalMenu(shape, shapeRenderedProps);
    case 'breadcrumb':
      return renderBreadcrumb(shape, shapeRenderedProps);
    case 'circle':
      return renderCircle(shape, shapeRenderedProps);
    case 'star':
      return renderStar(shape, shapeRenderedProps);
    case 'heading1':
      return renderHeading1(shape, shapeRenderedProps);
    case 'heading2':
      return renderHeading2(shape, shapeRenderedProps);
    case 'heading3':
      return renderHeading3(shape, shapeRenderedProps);
    case 'normaltext':
      return renderNormaltext(shape, shapeRenderedProps);
    case 'smalltext':
      return renderSmalltext(shape, shapeRenderedProps);
    case 'paragraph':
      return renderParagraph(shape, shapeRenderedProps);
    case 'largeArrow':
      return renderLargeArrowShape(shape, shapeRenderedProps);
    case 'icon':
      return renderIcon(shape, shapeRenderedProps);
    case 'bar':
      return renderBarChart(shape, shapeRenderedProps);
    case 'image':
      return renderImage(shape, shapeRenderedProps);
    default:
      return renderNotFound(shape, shapeRenderedProps);
  }
};
