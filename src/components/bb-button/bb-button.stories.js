import { storiesOf } from '@storybook/html';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { escapeHtml } from '../../utils/utils';
import readme from './readme.md';

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .add('Button', () => {
    const contentLabel = text('Label', 'Button');
    const variantLabel = 'Variant';
    const variantOptions = {
      primary: 'primary',
      secondary: 'secondary',
      success: 'success',
      error: 'error',
    };
    const variantDefault = 'primary';
    const variantSelect = select(variantLabel, variantOptions, variantDefault);

    const sizeLabel = 'Size';
    const sizeOptions = {
      default: 'default',
      big: 'big',
      small: 'small',
    };
    const sizeDefault = 'default';
    const sizeSelect = select(sizeLabel, sizeOptions, sizeDefault);

    const widthLabel = 'Full Width';
    const defaultValue = false;
    const widthSelect = boolean(widthLabel, defaultValue);


    const componentTag = `
      <bb-button 
        variant="${variantSelect}" 
        ${sizeSelect != 'default' ? 'size=' + '\"' + sizeSelect  + '\"' : ''} 
        ${widthSelect ? 'full' : ''}
      >
        ${contentLabel}
      </bb-button>
    ` 

    return /*html*/`
      <bb-button variant=${variantSelect} size=${sizeSelect} full=${widthSelect}>${contentLabel}</bb-button>
      <hr>
      <code>${escapeHtml(componentTag)}</code>
    `
  }, {notes: {
    markdown: readme
  }})
