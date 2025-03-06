import React from "react";
import ReactDOM from "react-dom";
import { Spinner } from 'react-bootstrap';

export const Loader = () => {
  return ReactDOM.createPortal(
    <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75" style={{ zIndex: 200 }}>
      <div className="position-fixed top-50 start-50 translate-middle">
        <Spinner 
          animation="border" 
          variant="light" 
          role="status"
          style={{ width: '3rem', height: '3rem' }}
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </div>,
    document.getElementById("loader")
  );
};