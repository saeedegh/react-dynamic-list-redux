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
          {
            id: 1,
            name: "Apple",
            price: 2.1,
            description: "normal apple",
            image:
              "https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834",
          },
          {
            id: 2,
            name: "Orrange",
            price: 1.6,
            description: "freezed",
            image:
              "https://5.imimg.com/data5/VN/YP/MY-33296037/orange-600x600-500x500.jpg",
          },
          {
            id: 3,
            name: "banana",
            price: 2.6,
            description: "freezed",
            image:
              "http://barthfruit.ch/custom/images/contentBilder/big/img_0658_banane.jpg",
          },
          {
            id: 4,
            name: "strawberry",
            price: 1,
            description: "freezed",
            image:
              "https://img.pixers.pics/pho_wat(s3:700/FO/70/41/90/18/700_FO70419018_d5aebe501709c7e5ee799943e3581cb1.jpg,700,690,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,640,jpg)/wall-murals-one-rich-strawberry-fruit.jpg.jpg",
          },
          {
            id: 5,
            name: "mango",
            price: 12,
            description: "freezed",
            image:
              "https://5.imimg.com/data5/SELLER/Default/2021/5/GH/WC/ZY/127199812/fresh-mango-fruits-500x500.jpg",
          },
          {
            id: 6,

            name: "watermelon",
            price: 3,
            description: "freezed",
            image:
              "http://www.frutas-hortalizas.com/img/fruites_verdures/presentacio/30.jpg",
          },
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
