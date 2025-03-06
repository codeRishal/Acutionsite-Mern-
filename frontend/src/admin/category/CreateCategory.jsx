import { Caption, PrimaryButton, Title } from "../../router";
import { Card, Form } from 'react-bootstrap';
import React from 'react';

export const CreateCategory = () => {
  return (
    <Card className="shadow p-4 rounded">
      <Card.Header className="bg-transparent border-0">
        <Title level={5} className="fw-normal">
          Create Category
        </Title>
      </Card.Header>

      <Card.Body>
        <Form>
          <Form.Group className="mb-4">
            <Caption className="mb-2">Title *</Caption>
            <Form.Control 
              type="text" 
              placeholder="Title"
              className="rounded-0"
              required 
            />
          </Form.Group>

          <PrimaryButton 
            type="submit" 
            className="rounded-0 mt-4"
          >
            CREATE
          </PrimaryButton>
        </Form>
      </Card.Body>
    </Card>
  );
};