import React from 'react';
import Button from './button.js';
 
export default {
   title: 'Button'
};
 
export const standard = () => <Button>Standard Button</Button>;
 
export const alternate = () => <Button isAlt={true}>Alternate Button</Button>