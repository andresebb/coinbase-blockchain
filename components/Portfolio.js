import { useEffect, useState } from "react";
import styled from "styled-components";
import { BalanceChart } from "./BalanceChart";
import { MyAssets } from "./MyAssets";

export const Portfolio = ({
  coins,
  walletAddress,
  sanityTokens,
  thirdWebTokens,
}) => {
  const [walletBalance, setWalletBalance] = useState(0);

  const tokenToUSD = {};

  //I got it
  for (const token of sanityTokens) {
    tokenToUSD[token.contractAddress] = Number(token.usdPrice);
  }

  const calculateTotalBalance = async () => {
    const totalBalance = await Promise.all(
      thirdWebTokens.map(async (token) => {
        // We get tokenquantity for 3web and multiple for the usd price in sanity
        const balance = await token.balanceOf(walletAddress);
        const TokenQuantity = Number(balance.displayValue);

        return TokenQuantity * tokenToUSD[token.address];
      })
    );

    let total = totalBalance.reduce((acc, curr) => acc + curr, 0);
    setWalletBalance(total.toLocaleString("en-US"));
  };

  useEffect(() => {
    calculateTotalBalance();
  }, []);

  console.log(walletBalance);

  return (
    <Wrapper>
      <BalanceChart walletBalance={walletBalance} />
      <MyAssets
        coins={coins}
        walletAddress={walletAddress}
        sanityTokens={sanityTokens}
        thirdWebTokens={thirdWebTokens}
      />
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
