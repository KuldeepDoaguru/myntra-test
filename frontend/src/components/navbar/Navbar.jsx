import React, { useState } from "react";
import styled from "styled-components";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <>
      <Container>
        <div className="navbar">
          <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
          </div>
          <ul className="nav-menu">
            <li onClick={() => setMenu("shop")}>
              <Link to="/">Shop</Link>
              {menu === "shop" ? <hr /> : ""}
            </li>
            <li onClick={() => setMenu("mens")}>
              <Link to="/mens">Men</Link>
              {menu === "mens" ? <hr /> : ""}
            </li>
            <li onClick={() => setMenu("womens")}>
              <Link to="/womens">Woman</Link> {menu === "womens" ? <hr /> : ""}
            </li>
            <li onClick={() => setMenu("kids")}>
              <Link to="/kids">Kids</Link> {menu === "kids" ? <hr /> : ""}
            </li>
          </ul>
          <div className="nav-login-cart">
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/cart">
              <img src={cart_icon} alt="" />
            </Link>
            <div className="nav-cart-count">0</div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
const Container = styled.div`
  .navbar {
    display: flex;
    justify-content: space-around;
    padding: 16px;
    box-shadow: 0 1px 3px -2px #000;
  }

  .nav-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    p {
      color: #171717;
      font-size: 38px;
      font-weight: 600;
    }
  }

  .nav-menu {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 50px;
    color: #606060;
    font-size: 20px;
    font-weight: 500;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3px;
      cursor: pointer;
      a {
        text-decoration: none;
      }
      hr {
        border: none;
        width: 80%;
        height: 3px;
        border-radius: 10px;
        background: #ff4141;
      }
    }
  }

  .nav-login-cart {
    display: flex;
    align-items: center;
    gap: 45px;
    button {
      width: 157px;
      height: 58px;
      outline: none;
      border: 1px solid #7a7a7a;
      border-radius: 75px;
      color: #151515;
      font-size: 20px;
      font-weight: 500;
      background: white;
      cursor: pointer;
    }
    button:active {
      background: #f3f3f3;
    }
  }

  .nav-cart-count {
    width: 22px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -35px;
    margin-left: -55px;
    border-radius: 11px;
    font-size: 14px;
    background: red;
    color: white;
  }
`;
