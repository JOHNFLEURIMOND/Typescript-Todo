import { configure, addDecorator } from '@storybook/react';
import themeDecorator from './themeDecorator';

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.(js|ts)x?$/), module);

addDecorator(themeDecorator);
