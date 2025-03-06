import React from "react";
import { Row, Col, Form, Button, Image } from 'react-bootstrap';
import { User2 } from "../../components/hero/Hero";


export const UserProfile = () => {
  return (
    <section className="shadow p-4 rounded">
      <div className="d-flex align-items-center gap-4">
        <Image src={User2} alt="" roundedCircle style={{ width: '96px', height: '96px', objectFit: 'cover' }} />
        <div>
          <h5 className="text-capitalize">Sunil Bk</h5>
          <p className="text-muted">example@gmail.com</p>
        </div>
      </div>

      <Form className="mt-4">
        <Row className="mt-4">
          <Col>
            <Form.Group>
              <Form.Label>Full Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Sunil" 
                className="text-capitalize"
                readOnly 
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Contact Number</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Contact Number" 
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="example@gmail.com" 
                disabled 
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="my-4">
          <Form.Label>Role</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="admin" 
            required 
          />
        </Form.Group>

        <Form.Group className="my-4">
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control 
            type="file" 
            required 
          />
        </Form.Group>

        <Button variant="success">Update Profile</Button>
      </Form>
    </section>
  );
};