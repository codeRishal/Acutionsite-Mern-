import { Heading } from "../../router";
import { productlists } from "../../utils/data";
import { ProductCard } from "../cards/ProductCard";
import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
export const ProductList = () => {
  return (
    <section className="py-5">
      <Container>
        <Heading
          title="Live Auction"
          subtitle="Explore on the world's best & largest Bidding marketplace with our beautiful Bidding products. We want to be a part of your smile, success and future growth."
        />

        <Row className="g-4 my-4">
          {productlists?.slice(0, 12)?.map((item, index) => (
            <Col key={index + 1} xs={12} sm={6} md={4} lg={3}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};