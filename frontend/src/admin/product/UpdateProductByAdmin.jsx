import { Caption, Title } from "../../router";
import { PrimaryButton } from "../../components/common/Design";
import { Card, Form } from 'react-bootstrap';
import React from 'react';

export const UpdateProductByAdmin = () => {
  return (
    <Card className="shadow p-4 rounded">
      <Card.Header className="bg-transparent border-0">
        <Title level={5} className="fw-normal">
          Update Product
        </Title>
      </Card.Header>
      
      <hr className="my-3" />
      
      <Card.Body>
        <Form>
          <Form.Group className="mb-3">
            <Caption className="mb-2">Commission *</Caption>
            <Form.Control 
              type="number" 
              name="commission"
              className="rounded-0"
            />
          </Form.Group>

          <PrimaryButton 
            type="submit" 
            className="rounded-0 mt-4"
          >
            Update
          </PrimaryButton>
        </Form>
      </Card.Body>
    </Card>
  );
};