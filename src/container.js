import React from 'react';

function Container({ children }) {
  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}
    >
      {children}
    </div>
  );
}

export default Container;
