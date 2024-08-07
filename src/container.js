import React from 'react';

function Container({ children }) {
  return <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '12px' }}>{children}</div>;
}

export default Container;
