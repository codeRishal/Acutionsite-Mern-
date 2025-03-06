import { PrimaryButton } from "../../router";
import { Caption, Title } from "../../components/common/Design";
import { Card, Form } from 'react-bootstrap';
import React from 'react';

export const UpdateCategory = () => {
  return (
    <Card className="shadow p-4 rounded">
      <Card.Header className="bg-transparent border-0">
        <Title level={5} className="fw-normal">
          Update Category
        </Title>
      </Card.Header>

      <Card.Body>
        <Form>
          <Form.Group className="mb-4">
            <Caption className="mb-2">Title *</Caption>
            <Form.Control 
              type="text" 
              name="title"
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