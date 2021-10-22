import React, { useState, useEffect } from "react";
import { Col, message, Row, Spin } from "antd";
import ProductCard from "./ProductCard";

function MainList() {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      await getList();
    })();
  }, []);

  const getList = async () => {
    try {
      setLoading(true);
      setTimeout(() => {
        setList([
          { id: 1, name: "Apple", price: 2.1, description: "normal apple" },
          { id: 2, name: "Orrange", price: 1.6, description: "freezed" },
        ]);
        setLoading(false);
      }, 1000);
    } catch (error) {
      setLoading(false);
      message.error("خطا در دریافت اطلاعات لیست");
    }
  };

  return (
    <Spin spinning={loading}>
      <Row gutter={[24, 24]}>
        {list.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Row>
    </Spin>
  );
}

export default MainList;
