import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useRouter } from "next/router";
import Link from "next/link";
import { TransferModal } from "./modal/TransferModal";

Modal.setAppElement("#__next");

export const Header = ({ walletAddress }) => {
  const router = useRouter();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#0a0b®d",
      padding: 0,
      border: "none",
    },
    overlay: {
      backgroundColor: "rgba(10, 11, 13, 0.75)",
    },
  };

  return (
    <HeaderContainer>
      <h1>Assets</h1>
      <HeaderActionsContainer>
        <WalletAdress>
          <h4>Wallet Connected</h4>
          <p>
            {walletAddress.slice(0, 7)}...{walletAddress.slice(35)}
          </p>
        </WalletAdress>
        <BuyButton>Buy / Sell</BuyButton>
        <Link href={"/?transfer=1"}>
          <SendButton>Send / Receive</SendButton>
        </Link>
      </HeaderActionsContainer>
      <Modal
        isOpen={!!router.query.transfer}
        onRequestClose={() => router.push("/")}
        style={customStyles}
      >
        <TransferModal />
      </Modal>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  padding: 12px 24px;
  align-items: center;
  grid-area: header;
  border-bottom: 1px solid #ffffff42;
  margin-bottom: 24px;
  h1 {
    margin: 0;
  }
`;

const HeaderActionsContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

const WalletAdress = styled.div`
  border: 1px solid #ffffff42;
  padding: 8px;
  border-radius: 40px;
  padding: 6px 14px;
  margin-left: 22px;

  h4 {
    letter-spacing: 1.1px;
    margin: 0;
    color: #2bc48a;
  }

  p {
    margin: 0;
  }
`;

const BuyButton = styled.div`
  background: #346df5;
  padding: 16px;
  border-radius: 6px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: black;
  margin-left: 22px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const SendButton = styled.div`
  border: 1px solid #ffffff42;
  padding: 16px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  margin-left: 22px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
