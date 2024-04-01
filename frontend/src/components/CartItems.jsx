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
            <div className="cartitems-total">
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
              <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
              <p>If you have a promo code, enter it here</p>
              <div className="cartitems-promobox">
                <input type="text" placeholder="promo code" />
                <button>Submit</button>
              </div>
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

  .cartitems-down {
    display: flex;
    margin: 100px 0px;
  }

  .cartitems-total {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-right: 200px;
    gap: 40px;
    button {
      width: 262px;
      height: 58px;
      outline: none;
      border: none;
      background: #ff5a5a;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      border-radius: 5px;
    }
  }

  .cartitems-total-items {
    display: flex;
    justify-content: space-between;
    padding: 15px 0px;
  }

  .cartitems-promocode {
    flex: 1;
    font-size: 16px;
    font-weight: 500;
    p {
      color: #555;
    }
  }

  .cartitems-promobox {
    width: 504px;
    margin-top: 15px;
    padding-left: 20px;
    height: 58px;
    background: #eaeaea;
    display: flex;
    input {
      border: none;
      outline: none;
      background: transparent;
      font-size: 16px;
      width: 330px;
      height: 50px;
    }
    button {
      width: 170px;
      height: 58px;
      font-size: 16px;
      background: black;
      color: white;
      cursor: pointer;
    }
  }
`;
