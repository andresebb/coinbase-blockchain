import { useState, useEffect } from "react";
import styled from "styled-components";
import { coins } from "../components/coins";
import { Header } from "../components/Header";
import { navItems } from "../components/navItems";
import { PopUp } from "../components/PopUp";
import { Portfolio } from "../components/Portfolio";
import { SideBar } from "../components/SideBar";
import { useGetTokens } from "../hooks/useGetTokens";

export const Dashboard = ({ address }) => {
  const { sanityTokens, thirdWebTokens } = useGetTokens();

  console.log(sanityTokens, thirdWebTokens);

  return (
    <DashboardContainer>
      <Header walletAddress={address} />
      <SideBar navItems={navItems} />
      {coins.length > 0 && <Portfolio coins={coins} />}
      <PopUp />
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  color: white;
  display: grid;
  padding-bottom: 42px;
  background-color: #0a090c;
  grid-template-columns: 250px 1fr 24%;
  grid-template-rows: auto 1fr 1fr;

  height: 100vh;
  overflow: hidden;
  /* overflow-y: scroll; */
  ::-webkit-scrollbar {
    display: none;
  }
  grid-template-areas:
    "sidebar header header"
    "sidebar main pops"
    "sidebar main pops";
`;
