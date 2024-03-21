import React, { useContext } from "react";
import styled from "styled-components";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  console.log(product);
  return (
    <>
      <Container>
        <div className="productdisplay">
          <div className="productdisplay-left">
            <div className="productdisplay-img-list">
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
              <img
                className="productdisplay-main-img"
                src={product.image}
                alt=""
              />
            </div>
          </div>
          <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_icon} alt="" />
              <img src={star_dull_icon} alt="" />
            </div>
            <p>(122)</p>

            <div className="productdisplay-right-prices">
              <div className="productdisplay-right-price-old">
                ${product.old_price}
              </div>
              <div className="productdisplay-right-price-new">
                ${product.new_price}
              </div>
            </div>
            <div className="productdisplay-right-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
              magnam dicta voluptas ipsam aspernatur culpa tenetur omnis, natus
              totam suscipit veniam rem numquam? Totam voluptatum deserunt
              facilis aspernatur, ad odio!
            </div>
            <div className="productdisplay-right-size">
              <h1>Select Size</h1>
              <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
              </div>
              <button
                onClick={() => {
                  addToCart(product.id);
                }}
              >
                ADD TO CART
              </button>
              <p className="productdisplay-right-category">
                <span>Category :</span> women, T-shirt, Crop Top
              </p>
              <p className="productdisplay-right-category">
                <span>Tags :</span> Modern, Latest
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductDisplay;
const Container = styled.div`
  .productdisplay {
    display: flex;
    margin: 0px 170px;
  }

  .productdisplay-left {
    display: flex;
    gap: 17px;
  }

  .productdisplay-img-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    img {
      height: 163px;
    }
  }
  .productdisplay-main-img {
    width: 586px;
    height: 700px;
  }

  .productdisplay-right {
    margin: 0px 70px;
    display: flex;
    flex-direction: column;
    h1 {
      color: #3d3d3d;
      font-size: 40px;
      font-weight: 700;
    }
    button {
      padding: 20px 40px;
      width: 200px;
      font-size: 16px;
      font-weight: 600;
      color: white;
      background: #ff4141;
      margin-bottom: 40px;
      border: none;
      outline: none;
      cursor: pointer;
      border-radius: 10px;
    }
  }

  .productdisplay-right-stars {
    display: flex;
    align-items: center;
    margin-top: 13px;
    gap: 5px;
    color: #1c1c1c;
    font-size: 16px;
  }

  .productdisplay-right-prices {
    display: flex;
    margin: 40px 0px;
    gap: 30px;
    font-size: 24px;
    font-weight: 700;
  }

  .productdisplay-right-price-old {
    color: #818181;
    text-decoration: line-through;
  }

  .productdisplay-right-price-new {
    color: #ff4141;
  }

  .productdisplay-right-size {
    h1 {
      margin-top: 55px;
      color: #656565;
      font-size: 20px;
      font-weight: 600;
    }
  }

  .productdisplay-right-sizes {
    display: flex;
    margin: 30px 0px;
    gap: 20px;
    div {
      padding: 18px 24px;
      background: #fbfbfb;
      border: 1px solid #ebebeb;
      border-radius: 3px;
      cursor: pointer;
    }
  }

  .productdisplay-right-category {
    margin-top: 10px;
    span {
      font-weight: 600;
    }
  }
`;
