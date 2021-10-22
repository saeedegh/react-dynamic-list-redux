import { Row, Col, Button } from "antd";
import React, { useContext } from "react";
import styled from "styled-components";
import logo from "../../logo.svg";

function ProductCard({ item }) {
  // const addToCompare = (data) => {
  //   data.selected = true;
  //   if (compareList.findIndex((el) => el.id === data.id) === -1) {
  //     setCompareList((prev) => [...prev, data]);
  //   }
  // };
  // //
  // const removeFromCompare = (data) => {
  //   data.selected = false;
  //   if (compareList.findIndex((el) => el.id === data.id) !== -1) {
  //     setCompareList((prev) => prev.filter((el) => el.id !== data.id));
  //   }
  // };
  return (
    <>
      <Col xs={24} sm={12} md={6}>
        <Card>
          <ImageContainer>
            <img src={logo}></img>
          </ImageContainer>
          <TextContainer>
            <MainInfo>
              <div className="main-title">{item.name}</div>
              <div className="price">
                <span>$</span>
                {item.price}
              </div>
            </MainInfo>
            <div className="description">{item.description}</div>
          </TextContainer>
        </Card>
      </Col>
    </>
  );
}

const Card = styled.div`
  background-color: white;
  border: 1px solid #d6d9dc;
  .description {
    color: #a5a6ac;
    padding: 10px 0;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  min-height: 15rem;
`;

const TextContainer = styled.div`
  padding: 10px;
`;
const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .main-title {
    font-size: 1.6rem;
  }

  .price {
    font-weight: bold;
    font-size: 1.3rem;
    color: red;
  }
`;
export default ProductCard;
