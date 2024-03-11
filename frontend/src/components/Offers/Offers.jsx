import React from "react";
import styled from "styled-components";
import exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <>
      <Container>
        <div className="container offers">
          <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>CHECK NOW</button>
          </div>
          <div className="offers-right">
            <img src={exclusive_image} alt="" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Offers;
const Container = styled.div`
  .offers {
    /* width: 100%; */
    height: 100%;
    display: flex;
    margin: auto;
    margin-top: 2rem;
    padding: 20px 140px;
    margin-bottom: 150px;
    background: linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%);
  }

  .offers-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      color: #171717;
      font-size: 80px;
      font-weight: 600px;
      line-height: 1.1;
      width: 34rem;
    }
    p {
      color: #171717;
      font-size: 22px;
      font-weight: 600;
    }
    button {
      width: 282px;
      height: 70px;
      border-radius: 35px;
      background: #ff4141;
      border: none;
      color: white;
      font-size: 22px;
      font-weight: 500;
      margin-top: 30px;
      cursor: pointer;
    }
  }

  .offers-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-top: 50px;
    img {
      height: 100%;
    }
  }
`;
