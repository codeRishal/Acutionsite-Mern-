import { Title } from "../router";
import { CgDollar } from "react-icons/cg";
import { Card, Container } from 'react-bootstrap';
import React from 'react';

export const Income = () => {
  return (
    <Container>
      <Card className="shadow mb-4 p-4 rounded">
        <Card.Body>
          <Title level={5} className="fw-normal">
            Commission Income
          </Title>

          <Card 
            className="text-center my-4 p-5 border-success bg-light"
            style={{ borderRadius: '1rem' }}
          >
            <Card.Body className="d-flex flex-column align-items-center gap-4 py-5">
              <CgDollar size={80} className="text-success" />
              <div>
                <Title level={1}>$500</Title>
                <Title>Total Income</Title>
              </div>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </Container>
  );
};