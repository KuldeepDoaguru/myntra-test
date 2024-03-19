import React, { useContext } from "react";
import styled from "styled-components";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/breadcrumbs/Breadcrum";
import ProductDisplay from "../components/productDisplay/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <>
      <Container>
        <Breadcrum product={product} />
        <ProductDisplay product={product} />
        <DescriptionBox />
      </Container>
    </>
  );
};

export default Product;
const Container = styled.div``;
