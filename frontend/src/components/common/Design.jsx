import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Button, Container as BSContainer } from 'react-bootstrap';
import React from 'react';
const Title = ({ level = 4, children, className }) => {  // Added default level
  const Heading = `h${level || 4}`;  // Fallback to h4 if level is undefined
  const sizes = {
    1: 'fs-1 fw-bold',
    2: 'fs-2 fw-bold',
    3: 'fs-3 fw-bold',
    4: 'fs-4 fw-semibold',
    5: 'fs-5 fw-semibold',
    6: 'fs-6 fw-medium'
  };

  return <Heading className={`${className} ${sizes[level] || sizes[4]}`}>{children}</Heading>;
};
Title.propTypes = {
  level: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

const Body = ({ children, className }) => {
  return <p className={`${className} text-body`}>{children}</p>;
};

const Caption = ({ children, className }) => {
  return <p className={`${className} small fw-medium text-secondary`}>{children}</p>;
};

const CustomNavLinkList = ({ href, className, isActive, children }) => {
  return (
    <NavLink 
      to={href} 
      className={`${className} nav-link fs-5 fw-medium ${isActive ? 'text-success' : ''}`}
    >
      {children}
    </NavLink>
  );
};

const CustomNavLink = ({ href, className, isActive, children }) => {
  return (
    <NavLink 
      to={href} 
      className={`${className} nav-link fs-5 fw-medium ${isActive ? 'bg-light text-success' : ''}`}
    >
      {children}
    </NavLink>
  );
};

const CustomLink = ({ className, children }) => {
  return (
    <NavLink className={`${className} text-secondary fw-medium small`}>
      {children}
    </NavLink>
  );
};

const Container = ({ children, className }) => {
  return <BSContainer className={className}>{children}</BSContainer>;
};

const PrimaryButton = ({ children, className }) => {
  return (
    <Button 
      type="submit" 
      variant="success" 
      className={`${className} rounded-pill px-5 py-2`}
    >
      {children}
    </Button>
  );
};

const ProfileCard = ({ children, className }) => {
  return (
    <div className={`${className} bg-light rounded-circle d-flex align-items-center justify-content-center`} 
         style={{ width: '48px', height: '48px' }}>
      {children}
    </div>
  );
};

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <Title level={4}>{title}</Title>
      <div className="w-50">
        <Caption>{subtitle}</Caption>
      </div>
    </>
  );
};

export { Title, Body, Caption, CustomLink, CustomNavLink, Container, PrimaryButton, ProfileCard, Heading, CustomNavLinkList };
export const commonClassNameOfInput = "form-control p-3";

// PropTypes definitions remain unchanged