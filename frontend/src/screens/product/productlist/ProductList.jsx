import React from "react";
import { Card, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

export const ProductList = () => {
  return (
    <Card className="shadow">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="fw-normal">Product Lists</h5>
          <NavLink to="/create-product">
            <Button 
              variant="success" 
              className="d-flex align-items-center gap-2 px-4 py-2"
            >
              <AiOutlinePlus size={20} />
              <span>Create Product</span>
            </Button>
          </NavLink>
        </div>
        <hr className="my-4" />
      </Card.Body>
    </Card>
  );
};