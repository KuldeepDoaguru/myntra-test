import React from "react";
import styled from "styled-components";

const LoginSignUp = () => {
  return (
    <>
      <Container>
        <div className="loginsignup">
          <div className="loginsignup-container pb-5">
            <h1>Sign Up</h1>
            <div className="loginsignup-fields">
              <input type="text" placeholder="your name" />
              <input type="email" placeholder="your email" />
              <input type="password" placeholder="password" />
            </div>
            <button>Continue</button>
            <p className="loginsignup-lgin">
              Already have an account? <span>Login here</span>{" "}
            </p>
            <div className="loginsignup-agree">
              <input type="checkbox" name="" id="" />
              <p>
                By Continuing, I agree to the terms of use and privacy policy.{" "}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default LoginSignUp;
const Container = styled.div`
  .loginsignup {
    width: 100%;
    height: 100%;
    background: #fce3fe;
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .loginsignup-container {
    width: 580px;
    height: 100%;
    background: white;
    margin: auto;
    padding: 40px 60px;
    h1 {
      margin: 20px 0px;
    }
    button {
      width: 100%;
      height: 72px;
      color: white;
      background: #ff4141;
      margin-top: 30px;
      border: none;
      font-size: 24px;
      font-weight: 500;
      cursor: pointer;
      border-radius: 10px;
    }
  }

  .loginsignup-fields {
    display: flex;
    flex-direction: column;
    gap: 29px;
    margin-top: 30px;
    input {
      height: 72px;
      width: 100%;
      padding-left: 20px;
      border: 1px solid #c9c9c9;
      outline: none;
      color: #5c5c5c;
      font-size: 18px;
      border-radius: 10px;
    }
  }

  .loginsignup-lgin {
    margin-top: 20px;
    color: #5c5c5c;
    font-size: 18px;
    font-weight: 500;
    span {
      color: #ff4141;
      font-weight: 600;
    }
  }

  .loginsignup-agree {
    display: flex;
    align-items: baseline;
    margin-top: 25px;
    gap: 3px;
    color: #5c5c5c;
    font-size: 18px;
    font-weight: 500;
  }
`;
