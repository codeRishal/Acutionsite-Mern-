import { processList } from "../../utils/data";
import { Heading, Title } from "../../router";
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import React from 'react';
export const Process = () => {
  return (
    <section className="bg-primary position-relative py-5">
      <div className="bg-white w-100 py-5 position-absolute top-0 rounded-bottom" style={{ marginTop: '-2.5rem' }}></div>
      
      <Container className="py-5 text-white" style={{ marginTop: '2rem' }}>
        <Heading title="How It Works" subtitle="Easy 4 steps to win" />

        <Row className="g-4 mt-4">
          {processList.map((item, index) => (
            <Col key={index} xs={12} md={6} lg={3}>
              <Card className="text-center h-100 p-4" style={{ backgroundColor: 'rgba(38,90,77,0.62)' }}>
                <Card.Body className="d-flex flex-column align-items-center">
                  <div style={{ width: '64px', height: '64px' }}>
                    <Image src={item.cover} alt="" fluid />
                  </div>
                  <Title level={5} className="my-3 fw-normal text-white">
                    {item.title}
                  </Title>
                  <p className="text-light">{item.desc}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <div className="bg-white w-100 py-5 position-absolute bottom-0 rounded-top" style={{ marginBottom: '-5rem' }}></div>
    </section>
  );
};