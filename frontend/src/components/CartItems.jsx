import React, { useContext } from "react";
import styled from "styled-components";
import { ShopContext } from "../context/ShopContext";
import remove_icon from "./Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);
  console.log(all_product);
  console.log(cartItems);
  return (
    <>
      <Container>
        <div className="container cartitems">
          <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />
          {all_product.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <div>
                  <div className="cartitems-format cartitems-format-main">
                    <img
                      src={e.image}
                      alt=""
                      className="carticon-product-icon"
                    />
                    <p>{e.name}</p>
                    <p>{e.new_price}</p>
                    <button className="cartitems-quantity">
                      {cartItems[e.id]}
                    </button>
                    <p>₹{e.new_price * cartItems[e.id]}</p>
                    <img
                      src={remove_icon}
                      alt=""
                      className="cartitems-remove-icon"
                      onClick={() => {
                        removeFromCart(e.id);
                      }}
                    />
                  </div>
                  <hr />
                </div>
              );
            }
            return null;
          })}
          <div className="cartitems-down">
            <div className="carftitems-total">
              <h1>Cart Total</h1>
              <div>
                <div className="cartitems-total-item"></div>
                <p>Subtotal</p>
                <p>${0}</p>
              </div>
              <hr />
              <div className="cartitems-total-items">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-items">
                <h3>Total</h3>
                <h3>${0}</h3>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CartItems;
const Container = styled.div`
  .cartItems {
    margin: 100px 170px;
    hr {
      height: 1px;
      background: rgb(226, 226, 226);
      border: 0;
    }
  }

  .cartitems-format-main {
    display: grid;
    grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr 1fr;
    align-items: center;
    gap: 75px;
    padding: 27px 0px 0px;
    color: #454545;
    font-size: 18px;
    font-weight: 600;
  }
  .cartitems-format {
    font-size: 17px;
    font-weight: 500;
  }

  .carticon-product-icon {
    height: 62px;
  }

  .cartitems-remove-icon {
    width: 15px;
    margin: 0px 40px;
    cursor: pointer;
  }

  .cartitems-quantity {
    width: 64px;
    height: 50px;
    border: 2px solid #ebebeb;
    background: #fff;
  }
`;
