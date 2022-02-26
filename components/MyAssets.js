import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Logo from "../assets/images/search.png";
import Btc from "../assets/images/btc.png";

export const MyAssets = () => {
  return (
    <MainContainer>
      <table>
        <tr>
          <th>Name</th>
          <th>Balance</th>
          <th>Price</th>
          <th>Allocation</th>
        </tr>
        <tr>
          <td>Bitcoin</td>
          <td>$230.32</td>
          <td>$5.32</td>
          <td>41,89%</td>
        </tr>
      </table>
      {/* <div>
        <h2>Your Assets</h2>
        <AssetsOptions>
          <FirstOption>Name</FirstOption>
          <p>Balance</p>
          <p>Price</p>
          <p>Allocation</p>
        </AssetsOptions>

        <AssetsOptions>
          <AssetLogo>
            <div
              style={{
                marginRight: "8px",
                width: "40px",
              }}
            >
              <Image src={Btc} />
            </div>
            <AssetName>
              <p>Bitcoin</p>
              <span>BTC</span>
            </AssetName>
          </AssetLogo>
          <AssetBalance>
            <p>$230.32</p>
            <span>6.5564855 BTC</span>
          </AssetBalance>
          <AssetPrice>
            <p>$5.32</p>
            <span>-4,74%</span>
          </AssetPrice>
          <AssetAllocation>
            <p>41,89%</p>
          </AssetAllocation>
        </AssetsOptions>
      </div> */}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  grid-area: main;
`;

const AssetsOptions = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const FirstOption = styled.div`
  width: 33%;
`;

const AssetContainer = styled.div`
  width: 100%;
`;

const AssetLogo = styled.div`
  width: 33%;
  display: flex;
  align-items: center;
`;

const AssetName = styled.div`
  p {
    font-weight: bold;
    margin: 0;
    margin-bottom: 4px;
  }

  span {
    color: #59585b;
  }
`;

const AssetBalance = styled.div``;
const AssetPrice = styled.div``;
const AssetAllocation = styled.div``;
