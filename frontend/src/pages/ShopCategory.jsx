import React, { useContext } from "react";
import styled from "styled-components";
import { ShopContext } from "../context/ShopContext";

const ShopCategory = (props) => {
  console.log("Props received:", props);
  const { all_product } = useContext(ShopContext);
  console.log("Banner prop:", props.banner);

  return (
    <>
      <Container>
        <div className="shop-category h-100">
          <img src={props.banner} alt="" />
        </div>
      </Container>
    </>
  );
};

export default ShopCategory;
const Container = styled.div``;
