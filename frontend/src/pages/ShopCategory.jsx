import React, { useContext } from "react";
import styled from "styled-components";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../components/Assets/dropdown_icon.png";
import Item from "../components/Item/Item";

const ShopCategory = (props) => {
  console.log("Props received:", props);
  const { all_product } = useContext(ShopContext);
  console.log("Banner prop:", props.banner);

  return (
    <>
      <Container>
        <div className="shop-category h-100">
          <img className="shopcategory-banner" src={props.banner} alt="" />
          <div className="shopcategory-indexSort">
            <p>
              <span>Showing 1-12</span>out of 36 products
            </p>
            <div className="shopcategory-sort">
              sort by <img src={dropdown_icon} alt="icon" />
            </div>
          </div>
          <div className="container-fluid shopcategory-products">
            {all_product.map((item, i) => {
              if (props.category === item.category) {
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
              } else {
                return null;
              }
            })}
          </div>
          <div className="shopcategory-loadmore">Explore More</div>
        </div>
      </Container>
    </>
  );
};

export default ShopCategory;
const Container = styled.div`
  .shopcategory-banner {
    width: auto;
  }
  .shopcategory-indexSort {
    display: flex;
    margin: 20px 40px;
    justify-content: space-between;
    align-items: center;
  }

  .shopcategory-sort {
    padding: 10px 20px;
    border-radius: 40px;
    border: 1px solid #888;
    p {
      font-weight: 600;
    }
    span {
      font-weight: 600;
    }
  }

  .shopcategory-products {
    margin: 40px 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 30px;
  }
  .shopcategory-loadmore {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 150px auto;
    width: 233px;
    height: 69px;
    border-radius: 75px;
    background: #ededed;
    color: #787878;
    font-size: 18px;
    font-weight: 500;
  }
`;
