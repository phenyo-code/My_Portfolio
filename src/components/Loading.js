import React from 'react';
import './Loading.css';

const Loading = ({ size = '50px', color = '#ff4040', }) => {
  return (
    <div className="loading-container">
      <div
        className="loading-spinner"
        style={{
          width: size,
          height: size,
          border: `4px solid ${color}`,
          borderTopColor: 'transparent',
        }}
      ></div>
      <p className="loading-message" style={{ color }}>
      </p>
    </div>
  );
};

export default Loading;

