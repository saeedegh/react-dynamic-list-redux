import React from "react";
import { Col, Row, Spin } from "antd";
import styles from "../../styles/List.module.css";
import ProductCard from "./ProductCard";

function list({ data, hideBtn }) {
  return (
    <>
      <Row className={styles.list_container} gutter={[24, 24]}>
        {data.map((el) => {
          return (
            <Col key={el.id} xl={6} lg={6} md={8} sm={12} xs={24}>
              <ProductCard data={el} hideBtn={hideBtn} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default list;
