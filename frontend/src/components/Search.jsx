import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../redux/features/categorySlice";
import { getAllProduct } from "../redux/features/productSlice";
import { Container, Button, ButtonGroup } from 'react-bootstrap';
import { Loader } from "./common/Loader";



export const Search = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  const storeData = useSelector((state) => state?.category);
  const { loading, categorys } = storeData;

  const handleCategoryClick = (categoryTitle) => {
    setSelectedCategory(categoryTitle);
    dispatch(getAllProduct(categoryTitle));
  };

  const handleViewAllClick = () => {
    setSelectedCategory("");
    dispatch(getAllProduct(""));
  };

  return (
    <section className="py-5">
      {loading && <Loader />}
      <Container className="text-center">
        <h1>Create Your Project</h1>
        <p className="mb-4">Search and download any images within a second</p>
        
        <ButtonGroup className="flex-wrap">
          <Button
            variant={selectedCategory ? "outline-secondary" : "success"}
            onClick={handleViewAllClick}
            className="m-1"
          >
            View ALL
          </Button>

          {categorys?.map((category) => (
            <Button
              key={category._id}
              variant={selectedCategory === category?.title ? "success" : "outline-secondary"}
              onClick={() => handleCategoryClick(category?.title)}
              className="m-1 text-capitalize"
            >
              {category?.title}
            </Button>
          ))}
        </ButtonGroup>
      </Container>
    </section>
  );
};