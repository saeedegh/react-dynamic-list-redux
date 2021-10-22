import { Row, Spin, Table, Col } from "antd";
import React, { useState } from "react";
import { useGetList } from "../hooks/GetList";
import List from "../components/Home/List";
import styles from "../styles/Home.module.css";
import CompareTable from "../components/Home/CompareTable";
import MainList from "../components/Home/MainList";
import styled from "styled-components";

export const HomeContext = React.createContext();
function Home() {
  const url = "https://dummy.restapiexample.com/api/v1/employees";
  const { list, spinning, setList } = useGetList(url);
  const [compareList, setCompareList] = useState([]);

  //

  //
  return (
    <MainContainer>
      <MainList />
    </MainContainer>
  );
}

// styles:
const MainContainer = styled.div`
  margin: 50px;
  background-color: #f7f7f7;
  padding: 10px;
  min-height: 100px;
`;

export default Home;
