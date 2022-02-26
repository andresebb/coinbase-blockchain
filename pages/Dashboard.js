import React from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { MyAssets } from "../components/MyAssets";
import { PopUp } from "../components/PopUp";
import { SideBar } from "../components/SideBar";

export const Dashboard = ({ address }) => {
  return (
    <DashboardContainer>
      <Header />
      <SideBar />
      <MyAssets />
      <PopUp />
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  color: white;
  height: 100vh;
  display: grid;
  background-color: #0a090c;
  grid-template-columns: 250px 1fr 24%;
  grid-template-rows: auto 1fr 1fr;
  grid-template-areas:
    "sidebar header header"
    "sidebar main pops"
    "sidebar main pops";
`;
