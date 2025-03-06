import { Sidebar } from "../../admin/Sidebar";
import { Container, Row, Col, Card } from 'react-bootstrap';
import React from 'react';
export const DashboardLayout = ({ children }) => {
  const role = "admin";

  const sidebarHeight = {
    admin: 'calc(110vh)',
    seller: 'calc(80vh)',
    buyer: 'calc(80vh)'
  };

  return (
    <div className="mt-5 pt-5">
      <Container>
        <Row>
          <Col md={3}>
            <Card className="shadow p-4 rounded" style={{ height: sidebarHeight[role] || '80vh' }}>
              <Sidebar role={role} />
            </Card>
          </Col>
          <Col md={9}>
            <div className="ps-4">
              {children}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};