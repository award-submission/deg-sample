import React from 'react';
 
function Button({isAlt=false, children}) {
   let cssClasses = 'button';
   if(isAlt) {
      cssClasses += ' button--alt';
   }
 
   return <button className={cssClasses}>{children}</button>;
}
 
export default Button;