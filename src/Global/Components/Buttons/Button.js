import React from 'react';
import './Button.css';

function Button({ children, widths, marginTop }) {
  return (
    <div
      className='butttonContainer'
      style={{ width: widths && widths, marginTop: marginTop && marginTop }}
    >
      {children}
    </div>
  );
}

export default Button;
