import React from "react";
import styled from "styled-components";
import Hero from "../components/hero/Hero";
import Popular from "../components/Popular/Popular";
import Offers from "../components/Offers/Offers";
import NewCollections from "../components/NewCollections/NewCollections";
import NewsLetter from "../components/NewsLetter/NewsLetter";

const Shop = () => {
  return (
    <>
      <Container>
        <Hero />
        <Popular />
        <Offers />
        <NewCollections />
        <NewsLetter />
      </Container>
    </>
  );
};

export default Shop;
const Container = styled.div`
  .off-marg {
    margin-top: 5rem;
  }
`;
