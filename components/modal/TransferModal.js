import React, { useState } from "react";
import styled from "styled-components";
import { CoinSelector } from "./CoinSelector";
import { SendModal } from "./SendModal";

export const TransferModal = ({
  sanityToken,
  thirdWebTokens,
  WalletAddress,
}) => {
  const [action, setAction] = useState("send");
  const [selectedToken, setSelectedToken] = useState(sanityToken[0]);

  const selectedStyle = {
    color: "#3773f5",
  };

  const unselectedStyle = {
    border: "1px solid #282b2f",
  };

  const selectedModal = (option) => {
    console.log("se ejecuto");
    switch (option) {
      case "send":
        return (
          <SendModal
            selectedToken={selectedToken}
            setAction={setAction}
            thirdWebTokens={thirdWebTokens}
            walletAddress={WalletAddress}
          />
        );
      case "receive":
        return <h2>Receiving</h2>;
      case "select":
        return (
          <CoinSelector
            setAction={setAction}
            selectedToken={selectedToken}
            setSelectedToken={setSelectedToken}
            sanityTokens={sanityToken}
            thirdWebTokens={thirdWebTokens}
            walletAddress={WalletAddress}
          />
        );
      case "transferring":
        return <h2>Transferring...</h2>;

      case "transferred":
        return (
          <h2
            style={{
              color: "green",
            }}
          >
            Transfer Complete
          </h2>
        );

      case "error":
        return (
          <h2
            style={{
              color: "red",
            }}
          >
            Can't process your transaction
          </h2>
        );
      default:
        return <h2>Sending</h2>;
    }
  };

  return (
    <Wrapper>
      <Selector>
        <Option
          style={action === "send" ? selectedStyle : unselectedStyle}
          onClick={() => setAction("send")}
        >
          <p>Send</p>
        </Option>
        <Option
          style={action === "receive" ? selectedStyle : unselectedStyle}
          onClick={() => setAction("receive")}
        >
          <p>Receive</p>
        </Option>
      </Selector>
      <MainModal>{selectedModal(action)}</MainModal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 35rem;
  width: 27rem;
  color: white;
  border: 1px solid #282b2f;
  display: flex;
  flex-direction: column;
  background-color: black;
`;

const Selector = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
`;

const Option = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #111214;
  }
`;

const MainModal = styled.div`
  flex: 1;
  padding: 10px;
  margin: 10px;
`;
