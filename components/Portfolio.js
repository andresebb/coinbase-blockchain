import styled from "styled-components";
import { BalanceChart } from "./BalanceChart";
import { MyAssets } from "./MyAssets";

export const Portfolio = ({ coins }) => {
  return (
    <Wrapper>
      <BalanceChart />
      <MyAssets coins={coins} />
    </Wrapper>
  );
};

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
