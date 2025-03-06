import { topList } from "../../utils/data";
import { Caption, Heading } from "../../router";
import { Container, Row, Col, Card, Image, Badge } from 'react-bootstrap';
import React from 'react';

export const TopCollection = () => {
  return (
    <section className="py-5 position-relative">
      <Container>
        <Heading
          title="Top Collection"
          subtitle="Explore on the world's best & largest Bidding marketplace with our beautiful Bidding products. We want to be a part of your smile, success and future growth."
        />

        <Row className="g-4 mt-4">
          {topList.map((item, index) => (
            <Col key={index + 1} xs={12} sm={6} md={3}>
              <Card className="bg-light p-3 position-relative">
                <div style={{ height: '224px' }}>
                  <Image src={item.img1} alt="" className="w-100 h-100 rounded object-fit-cover" />
                </div>
                
                <div className="position-absolute" style={{ top: '45%', left: '38%' }}>
                  <div className="border border-4 border-success rounded-circle" style={{ width: '96px', height: '96px' }}>
                    <Image src={item.img2} alt="" className="w-100 h-100 rounded-circle object-fit-cover" />
                  </div>
                </div>

                <Row className="g-3 mt-3">
                  {[item.img3, item.img4, item.img2].map((img, idx) => (
                    <Col key={idx} xs={4}>
                      <div style={{ height: '112px' }}>
                        <Image src={img} alt="" className="w-100 h-100 rounded object-fit-cover" />
                      </div>
                    </Col>
                  ))}
                </Row>

                <div className="d-flex justify-content-between align-items-center mt-4">
                  <Caption>{item.catgeory}</Caption>
                  <Badge bg="success" className="px-3 py-2">{item.total} Items</Badge>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};