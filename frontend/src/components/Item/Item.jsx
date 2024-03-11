import React from "react";
import styled from "styled-components";

const Item = (props) => {
  return (
    <>
      <Container>
        <div className="item">
          <img src={props.image} alt="" />
          <p>{props.name}</p>
          <div className="item-prices">
            <div className="item-price-new">₹{props.new_price}</div>
            <div className="item-price-old">₹{props.old_price}</div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Item;
const Container = styled.div`
  .item {
    width: 350px;
    p {
      margin: 6px 0px;
    }
    &:hover {
      transform: scale(1.05);
      transition: 0.6s;
    }
  }
  .item-prices {
    display: flex;
    gap: 20px;
  }

  .item-price-new {
    color: #374151;
    font-size: 18px;
    font-weight: 600;
  }

  .item-price-old {
    color: #878787;
    font-size: 18px;
    font-weight: 500;
    text-decoration: line-through;
  }
`;
