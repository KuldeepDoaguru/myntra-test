import React from "react";
import styled from "styled-components";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <>
      <Container>
        <div className="hero">
          <div className="hero-left">
            <h2>New Arrivals Only</h2>
            <div>
              <div className="hero-hand-icon">
                <p>New</p>
                <img src={hand_icon} alt="" srcset="" />
              </div>
              <p>Collections</p>
              <p>for Everyone</p>
            </div>
            <div className="hero-latest-btn">
              <div>Latest Collection</div>
              <img src={arrow_icon} alt="" />
            </div>
          </div>
          <div className="hero-right">
            <img src={hero_image} alt="" srcset="" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
const Container = styled.div`
  .hero {
    height: 100%;
    background: linear-gradient(180deg, #fde1ff, #e1ffea22, transparent);
    display: flex;
  }
  .hero-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding: 180px;
    line-height: 1.1;
    h2 {
      color: #090909;
      font-size: 26px;
      font-weight: 600;
    }
    p {
      color: #171717;
      font-size: 70px;
      font-weight: 700;
    }
  }

  .hero-hand-icon {
    display: flex;
    align-items: center;
    gap: 20px;
    img {
      width: 105px;
    }
  }

  .hero-latest-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15x;
    width: 310px;
    padding: 1rem;
    height: 70px;
    border-radius: 75px;
    margin-top: 30px;
    background: #ff4141;
    font-size: 22px;
    color: white;
    font-weight: 500;
  }

  .hero-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 100%;
      width: auto;
    }
  }
`;
