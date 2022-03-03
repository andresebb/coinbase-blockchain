import React from "react";
import styled from "styled-components";
import { BalanceChart } from "./BalanceChart";
import { MyAssets } from "./MyAssets";

const Portfolio = ({ coins }) => {
  return (
    <Wrapper>
      <BalanceChart />
      <MyAssets coins={coins} />
    </Wrapper>
  );
};

export default Portfolio;

const Wrapper = styled.div`
  padding: 0 16px;
  overflow: scroll;
  overflow-x: hidden;
  height: 100vh;
  padding-bottom: 150px;

  ::-webkit-scrollbar {
    display: none;
  }
`;
