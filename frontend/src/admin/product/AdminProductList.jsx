import { Title } from "../../router";
import { Table } from "../../components/Table";
import { Card } from 'react-bootstrap';
import React from 'react';

export const AdminProductList = () => {
  return (
    <Card className="shadow p-4 rounded">
      <Card.Header className="bg-transparent border-0 d-flex justify-content-between align-items-center">
        <Title level={5} className="fw-normal mb-0">
          Product Lists
        </Title>
      </Card.Header>
      <hr className="my-3" />
      <Card.Body className="p-0">
        <Table />
      </Card.Body>
    </Card>
  );
};