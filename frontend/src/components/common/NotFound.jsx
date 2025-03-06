import React from "react";
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100">
      <div className="text-center">
        <div className="floating">
          <svg 
            className="mx-auto text-success" 
            style={{ width: '6rem', height: '6rem' }}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M9.75 17L15 12m0 0l-5.25-5m5.25 5H3"
            />
          </svg>
        </div>
        <h1 className="display-1 fw-bold text-dark mt-4">404</h1>
        <p className="fs-4 text-secondary mt-2">Page Not Found</p>
        <Link to="/">
          <Button 
            variant="success" 
            className="mt-4 px-4 py-2"
          >
            Go Back Home
          </Button>
        </Link>
      </div>
    </Container>
  );
};