import { categorylists } from "../../utils/data";
import { CategoryCard, Heading } from "../../router";
import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
export const CategorySlider = () => {
  return (
    <section className="py-5">
      <Container>
        <Heading 
          title="Browse the catgeorys" 
          subtitle="Most viewed and all-time top-selling category" 
        />

        <Row className="g-4 my-4">
          {categorylists.map((item) => (
            <Col key={item.id} xs={6} sm={4} md={3} lg={2}>
              <CategoryCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};