import React from "react";
import CartItems from "../components/CartItems";
import styled from "styled-components";

const Cart = () => {
  return (
    <>
      <Container>
        <CartItems />
      </Container>
    </>
  );
};

export default Cart;
const Container = styled.div``;
