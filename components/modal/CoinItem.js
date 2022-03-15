import React, { useEffect, useState } from "react";
import styled from "styled-components";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../lib/sanity";

export const CoinItem = ({
  token,
  setAction,
  sender,
  selectedToken,
  setSelectedToken,
  thirdWebTokens,
  sanityTokens,
}) => {
  const [balance, setBalance] = useState(0);
  const [imageUrl, setimageUrl] = useState("");

  useEffect(() => {
    const getBalance = async () => {
      let activeThirdWebToken;

      thirdWebTokens.map((thirdWebToken) => {
        if (thirdWebToken.address === token.contractAddress) {
          activeThirdWebToken = thirdWebToken;
        }
      });

      const balance = await activeThirdWebToken.balanceOf(sender);

      return await setBalance(balance.displayValue.split(".")[0]);
    };
    getBalance();
  }, []);

  useEffect(() => {
    setimageUrl(imageUrlBuilder(client).image(token.logo).url());
  }, []);

  return (
    <Wrapper
      style={{
        backgroundColor: selectedToken.name === token.name && "#141519",
      }}
      onClick={() => {
        setSelectedToken(token);
        setAction("send");
      }}
    >
      <Main>
        <Icon>
          <img src={imageUrl} alt="nada" />
        </Icon>
        <NameDetails>
          <Name>{token.name}</Name>
          <Symbol>{token.symbol}</Symbol>
        </NameDetails>
      </Main>
      <Balance>
        {balance} {token.symbol}
      </Balance>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0%.5rem;
  border-radius: 0%.5rem;
  margin-bottom: 0%.3rem;

  &:hover {
    background-color: #0e0f14;
  }
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin: 0 0.5rem;
  cursor: pointer;
`;

const Icon = styled.div`
  margin-right: 1rem;
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 50%;
  overflow: hidden;
  display: grid;
  place-items: center;

  & > img {
    height: 120%;
    width: 120%;
    object-fit: cover;
  }
`;

const NameDetails = styled.div``;

const Name = styled.div`
  font-size: 1.1rem;
  margin-bottom: 0%.2rem;
`;

const Symbol = styled.div`
  color: #888f9b;
  font-size: 0%.8rem;
`;

const Balance = styled.div``;

const isSelected = styled.div`
  margin-left: 0%.5rem;
  color: #3773f5;
`;
