import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import React from 'react';
export const ProductEdit = () => {
  return (
    <Card className="shadow p-4">
      <Card.Body>
        <h5 className="fw-normal mb-3">Update Product</h5>
        <hr className="my-4" />
        
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Title *</Form.Label>
            <Form.Control type="text" name="title" placeholder="Title" required />
          </Form.Group>

          <Row className="mb-4">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Height (cm)</Form.Label>
                <Form.Control type="number" name="height" placeholder="Height" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Length (cm)</Form.Label>
                <Form.Control type="number" name="lengthpic" placeholder="Length" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Width (cm)</Form.Label>
                <Form.Control type="number" name="width" placeholder="Width" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>
                  Medium used <span className="text-purple fst-italic">(Typically, pencil, ink, charcoal or other)</span>
                </Form.Label>
                <Form.Control type="text" name="mediumused" placeholder="Medium used" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={6}>
              <Form.Group>
                <Form.Label>
                  Weight of piece <span className="text-purple fst-italic">(kg)</span>
                </Form.Label>
                <Form.Control type="number" name="weigth" placeholder="Weight" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Price Range *</Form.Label>
                <Form.Control type="number" name="price" placeholder="Price" required />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-4">
            <Form.Label>Description *</Form.Label>
            <Form.Control as="textarea" name="description" rows={5} />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" name="image" />
          </Form.Group>

          <Button variant="success" type="submit">
            Update
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};