import { addDecorator } from '@storybook/html';
import renderToStaticMarkup from './decorators/renderToStaticMarkup.js';
 
addDecorator(renderToStaticMarkup);