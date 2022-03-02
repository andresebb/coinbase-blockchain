import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Logo from "../assets/images/search.png";

export const MyAssets = () => {
  return (
    <MainContainer>
      <TableTitle>Your Assets</TableTitle>
      <TableContaienr>
        <TableFirstTr>
          <TableName>Name</TableName>
          <TableOption>Balance</TableOption>
          <TableOption>Price</TableOption>
          <TableOption>Allocation</TableOption>
        </TableFirstTr>
        <TableSecondTr>
          <td>
            <AssetName>
              <Image src={Logo} />
              <ShortName>
                <p>Bitcoin</p>
                <TextGray>BTC</TextGray>
              </ShortName>
            </AssetName>
          </td>
          <TableTd>
            <p>$230.32</p>
            <TextGray>6.2568455</TextGray>
          </TableTd>
          <TableTd>
            <p>$5.32</p>
            <p>-4,24%</p>
          </TableTd>
          <TableTd>
            <p>%41.59</p>
          </TableTd>
          <td>...</td>
        </TableSecondTr>
      </TableContaienr>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  grid-area: main;
  padding: 0 16px;
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

const TableFirstTr = styled.tr`
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

const TableSecondTr = styled.tr`
  border-bottom: 1px solid #ffffff42;
  border-right: 1px solid #ffffff42;
  border-left: 1px solid #ffffff42;
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
