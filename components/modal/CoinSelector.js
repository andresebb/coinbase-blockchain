import React, { useState } from "react";
import styled from "styled-components";
import { CoinItem } from "./CoinItem";

export const CoinSelector = ({
  setAction,
  selectedToken,
  setSelectedToken,
  sanityTokens,
  thirdWebTokens,
  walletAddress,
}) => {
  console.log(sanityTokens);

  return (
    <Wrapper>
      <Title>Select Assets</Title>
      <CoinList>
        {sanityTokens.map((token, index) => {
          return (
            <CoinItem
              key={index}
              token={token}
              setAction={setAction}
              sender={walletAddress}
              selectedToken={selectedToken}
              setSelectedToken={setSelectedToken}
              thirdWebTokens={thirdWebTokens}
              sanityTokens={sanityTokens}
            />
          );
        })}
      </CoinList>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const CoinList = styled.div``;
