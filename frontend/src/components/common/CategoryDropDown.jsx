import Select from "react-select";
import { Form } from 'react-bootstrap';
import React from 'react';
export const CategoryDropDown = ({ options, value, onChange, placeholder = "Select Category" }) => {
  const customStyles = {
    control: (base) => ({
      ...base,
      minHeight: '48px',
      borderRadius: '0.375rem',
      borderColor: '#dee2e6',
      '&:hover': {
        borderColor: '#198754'
      }
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected ? '#198754' : base.backgroundColor,
      '&:hover': {
        backgroundColor: state.isSelected ? '#198754' : '#e9ecef'
      }
    })
  };

  return (
    <Form.Group>
      <Select
        id="category"
        options={options}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        styles={customStyles}
        className="basic-single"
        classNamePrefix="select"
      />
    </Form.Group>
  );
};