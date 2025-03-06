import { Caption, Heading, Title } from "../../router";
import { topSellerList } from "../../utils/data";
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import React from 'react';

export const TopSeller = () => {
  return (
    <section className="py-5">
      <Container>
        <Heading 
          title="Top Seller" 
          subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam laboriosam iusto pariatur alias error numquam blanditiis," 
        />

        <Row className="g-4 mt-4">
          {topSellerList.map((item, index) => (
            <Col key={index + 1} xs={12} sm={6} md={4} lg={3} xl={2}>
              <Card className="border p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-3">
                    <div style={{ width: '64px', height: '64px' }}>
                      <Image 
                        src={item.profile} 
                        alt="" 
                        roundedCircle 
                        className="w-100 h-100 object-fit-cover" 
                      />
                    </div>
                    <div>
                      <Title level={5} className="fw-normal fs-5 mb-1">
                        {item.title}
                      </Title>
                      <Caption>${item.amount * item.id}</Caption>
                    </div>
                  </div>
                  <h2 className="opacity-10 mb-0">0{item.id}</h2>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};