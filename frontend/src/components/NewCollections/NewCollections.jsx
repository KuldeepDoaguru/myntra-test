import React from "react";
import styled from "styled-components";
import new_collections from "../Assets/new_collections";
import Item from "../Item/Item";

const NewCollections = () => {
  return (
    <>
      <Container>
        <div className="new-collections">
          <h1>NEW COLLECTIONS</h1>
          <hr />
          <div className="collections">
            {new_collections.map((item, i) => {
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
            })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default NewCollections;
const Container = styled.div`
  .new-collections {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    align-items: center;
    gap: 10px;
    height: 100%;
    h1 {
      color: #171717;
      font-size: 50px;
      font-weight: 600;
    }
    hr {
      width: 200px;
      height: 6px;
      border-radius: 10px;
      background: #252525;
    }
  }
  .collections {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 50px;
    gap: 30px;
  }
`;
