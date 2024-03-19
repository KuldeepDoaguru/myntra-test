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
const Container = styled.div`
  .breadcrum {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #5e5e5e;
    font-size: 16px;
    font-weight: 600;
    margin: 60px 170px;
    text-transform: capitalize;
  }
`;
