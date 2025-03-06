import PropTypes from "prop-types";
import { Title } from "../common/Design";
import { Card } from 'react-bootstrap';
import React from 'react';

export const CategoryCard = ({ item }) => {
  return (
    <Card className="text-center p-4 bg-light shadow">
      <div style={{ height: '96px' }}>
        <Card.Img 
          src={item.image} 
          alt={item.title}
          className="h-100 object-fit-contain"
        />
      </div>
      <Card.Body className="p-0 mt-2">
        <Title level={5} className="text-uppercase">{item.title}</Title>
      </Card.Body>
    </Card>
  );
};

CategoryCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};