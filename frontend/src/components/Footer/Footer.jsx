import React from "react";
import styled from "styled-components";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <>
      <Container>
        <div className="footer">
          <div className="footer-logo">
            <img src={footer_logo} alt="footer-logo" />
            <p>SHOPPER</p>
          </div>
          <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className="footer-social-icon">
            <div className="footer-icons-container shadow rounded">
              <img src={instagram_icon} alt="instagram" />
            </div>
            <div className="footer-icons-container shadow rounded">
              <img src={pintester_icon} alt="pinterest" />
            </div>
            <div className="footer-icons-container shadow rounded">
              <img src={whatsapp_icon} alt="whatsapp" />
            </div>
          </div>
          <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Right Reserved.</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Footer;
const Container = styled.div`
  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
  .footer-logo {
    display: flex;
    align-items: center;
    gap: 20px;
    p {
      color: #383838;
      font-size: 46px;
      font-weight: 600;
    }
  }

  .footer-links {
    display: flex;
    list-style: none;
    gap: 50px;
    color: #252525;
    font-size: 20px;
    li {
      cursor: pointer;
    }
  }

  .footer-social-icon {
    display: flex;
    gap: 20px;
  }

  .footer-icons-container {
    padding: 10px;
    padding-bottom: 6px;
    background: #fbfbfb;
    border: none;
  }

  .footer-copyright {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 100%;
    margin-bottom: 30px;
    color: #1a1a1a;
    font-size: 20px;
    hr {
      width: 80%;
      border: none;
      border-radius: 10px;
      height: 3px;
      background: #c7c7c7;
    }
  }
`;
