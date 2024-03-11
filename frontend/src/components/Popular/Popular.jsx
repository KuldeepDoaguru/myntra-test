import React from "react";
import styled from "styled-components";
import Item from "../Item/Item";
import data_product from "../Assets/data";

const Popular = () => {
  return (
    <>
      <Container>
        <div className="popular">
          <h1>POPULAR IN WOMEN</h1>
          <hr />
          <div className="popular-item">
            {data_product.map((item, i) => {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Popular;
const Container = styled.div`
  .popular {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: 100%;
    h1 {
      color: #171717;
      font-size: 50px;
      margin-top: 2rem;
      font-weight: 600;
    }
    hr {
      width: 200px;
      height: 6px;
      border-radius: 10px;
      background: #252525;
    }
  }
  .popular-item {
    display: flex;
    margin-top: 50px;
    gap: 30px;
  }
`;
