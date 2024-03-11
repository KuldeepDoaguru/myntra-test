import React from "react";
import styled from "styled-components";

const NewsLetter = () => {
  return (
    <>
      <Container>
        <div className="newsletter">
          <h1>Get Exclusive Offers on Your Email</h1>
          <p>Subscribe to our newsletter and stay updated</p>
          <div>
            <input type="email" placeholder="your email id" />
            <button>Subscribe</button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default NewsLetter;
const Container = styled.div`
  .newsletter {
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    justify-content: center;
    margin: auto;
    padding: 0px 140px;
    margin-bottom: 150px;
    gap: 30px;
    background: linear-gradient(180deg), #fde1ff 0%, #e1ffea22 60%;
    h1 {
      color: #454545;
      font-size: 55px;
      margin-top: 2rem;
      font-weight: 600;
    }
    p {
      color: #454545;
      font-size: 20px;
    }
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: white;
      width: 730px;
      height: 70px;
      border-radius: 80px;
      border: 1px solid #e3e3e3;
      input {
        width: 500px;
        margin-left: 30px;
        border: none;
        outline: none;
        color: #616161;
        font-family: poppins;
        font-size: 16px;
      }
      button {
        width: 210px;
        height: 70px;
        border-radius: 80px;
        background: black;
        color: white;
        font-size: 16px;
        cursor: pointer;
      }
    }
  }
`;
