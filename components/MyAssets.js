import Image from "next/image";
import React from "react";
import styled from "styled-components";
import more from "../assets/more.png";

export const MyAssets = ({ coins }) => {
  return (
    <MainContainer>
      <TableTitle>Your Assets</TableTitle>
      <TableContaienr>
        <TableTr>
          <TableName>Name</TableName>
          <TableOption>Balance</TableOption>
          <TableOption>Price</TableOption>
          <TableOption>Allocation</TableOption>
        </TableTr>

        {coins.map((coin) => {
          return (
            <TableTr key={coin.name}>
              <TableTd>
                <AssetName>
                  <div
                    style={{
                      width: "42px",
                    }}
                  >
                    <Image src={coin.logo} />
                  </div>
                  <ShortName>
                    <p>{coin.name}</p>
                    <TextGray>{coin.sign}</TextGray>
                  </ShortName>
                </AssetName>
              </TableTd>
              <TableTd>
                <p>${coin.balanceUsd}</p>
                <TextGray>{coin.balanceCoin}</TextGray>
              </TableTd>
              <TableTd>
                <p>${coin.priceUsd}</p>
                <p style={{ color: coin.change < 0 ? "#f0616d" : "#26ad75" }}>
                  {coin.change > 0 && <span>+</span>}
                  {coin.change}%
                </p>
              </TableTd>
              <TableTd>
                <p>%{coin.allocation}</p>
              </TableTd>
              <TableTd>
                <MoreIcon>
                  <Image src={more} />
                </MoreIcon>
              </TableTd>
            </TableTr>
          );
        })}
      </TableContaienr>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  grid-area: main;
`;

const TableTitle = styled.p`
  border: 1px solid #ffffff42;
  padding: 20px;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  font-size: 20px;
  margin: 0;
`;

const TableContaienr = styled.table`
  width: 100%;
  border-collapse: collapse;

  padding: 12px;
  border-radius: 6px;
`;

const TableTr = styled.tr`
  border-bottom: 1px solid #ffffff42;
  border-right: 1px solid #ffffff42;
  border-left: 1px solid #ffffff42;
`;

const TableName = styled.th`
  width: 40%;
  text-align: left;
  padding: 22px 0px;
  padding-left: 20px;
`;

const TableOption = styled.th`
  text-align: left;
  width: 20%;
`;

const AssetName = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  padding-left: 20px;
  p {
    margin: 0;
  }
`;

const ShortName = styled.div`
  margin-left: 10px;
`;

const TableTd = styled.td`
  p {
    margin: 0;
  }
`;

const TextGray = styled.p`
  color: #8c8b8f;
`;

const MoreIcon = styled.div`
  width: 20px;
  cursor: pointer;
  transform: rotate(90deg);
  margin-right: 12px;
`;
