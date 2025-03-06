import { trustList } from "../../utils/data";
import { Heading } from "../../router";
import { Container, Row, Col, Image } from 'react-bootstrap';
import React from 'react';

export const Trust = () => {
  return (
    <section className="py-5 position-relative">
      <Container>
        <Heading
          title="Trusted By 500+ Businesses."
          subtitle="Explore on the world's best & largest Bidding marketplace with our beautiful Bidding products. We want to be a part of your smile, success and future growth."
        />

        <Row className="g-4 mt-4">
          {trustList.map((item, index) => (
            <Col key={index} xs={4} sm={3} md={2} lg={1} className="d-flex align-items-center">
              <div className="border rounded p-2 w-100">
                <Image
                  src={item.profile}
                  alt=""
                  fluid
                  className="object-fit-contain"
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};