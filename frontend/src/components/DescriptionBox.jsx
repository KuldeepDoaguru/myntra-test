import React from "react";
import styled from "styled-components";

const DescriptionBox = () => {
  return (
    <>
      <Container>
        <div className="descriptionbox">
          <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box faded">Review (122)</div>
          </div>
          <div className="descriptionbox-description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              et atque suscipit quod incidunt minima adipisci officiis sed nemo
              molestias aliquam labore veniam, eos itaque esse magni nisi
              voluptatem minus. Vel, deserunt nihil? Impedit quaerat corporis,
              repellat voluptate excepturi iusto, quae maiores fuga iste
              voluptatem cumque, error illum? Sapiente at blanditiis aut dolorum
              dolor ipsum assumenda sint commodi quae odio!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Delectus, doloremque! Molestiae, velit, consequatur explicabo quo
              laboriosam, laudantium quisquam voluptate incidunt rem placeat sit
              aperiam saepe mollitia tenetur quia aliquid tempora.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default DescriptionBox;
const Container = styled.div`
  .descriptionbox {
    margin: 120px 170px;
  }
  .descriptionbox-navigator {
    display: flex;
  }
  .descriptionbox-nav-box {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
    width: 171px;
    height: 70px;
    border: 1px solid #d0d0d0;
  }
  .faded {
    background-color: #fbfbfb;
    color: #555;
  }

  .descriptionbox-description {
    display: flex;
    flex-direction: column;
    gap: 25px;
    border: 1px solid #d0d0d0;
    padding: 48px;
    padding-bottom: 70px;
  }
`;
