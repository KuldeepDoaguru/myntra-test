import React from "react";
import styled from "styled-components";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <>
      <Container>
        <div className="breadcrum">
          HOME <img src={arrow_icon} alt="icon" /> SHOP{" "}
          <img src={arrow_icon} alt="icon" /> {product.category}{" "}
          <img src={arrow_icon} alt="icon" /> {product.name}
        </div>
      </Container>
    </>
  );
};

export default Breadcrum;
const Container = styled.div``;
