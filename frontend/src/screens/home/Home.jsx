import { Container } from 'react-bootstrap';
import { CategorySlider, Hero, Process, TopCollection, TopSeller, Trust } from "../../router";
import { ProductList } from "../../components/hero/ProductList";
import React from 'react';

export const Home = () => {
  return (
    <>
      <Hero />
      <Container fluid>
        <CategorySlider />
        <ProductList />
        <TopSeller />
        <Process />
        <Trust />
        <TopCollection />
      </Container>
    </>
  );
};