import Image from "next/image";
import React from "react";
import styled from "styled-components";
import coinbaseLogo from "../assets/images/cb-logo.png";
import imagen from "../assets/images/search.png";

export const SideBar = () => {
  return (
    <SideBarContainer>
      <LogoContainer>
        <Image src={coinbaseLogo} alt="Picture of the author" />
      </LogoContainer>
      <div>
        <OptionsContainer>
          <OptionImageContainer>
            <Image src={imagen} alt="Picture of the author" />
          </OptionImageContainer>
          <p>Assets</p>
        </OptionsContainer>
        <OptionsContainer>
          <OptionImageContainer>
            <Image src={imagen} alt="Picture of the author" />
          </OptionImageContainer>
          <p>Assets</p>
        </OptionsContainer>
        <OptionsContainer>
          <OptionImageContainer>
            <Image src={imagen} alt="Picture of the author" />
          </OptionImageContainer>
          <p>Assets</p>
        </OptionsContainer>
      </div>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  grid-area: sidebar;
  border-right: 1px solid #ffffff42;
  padding: 0 24px;
`;

const LogoContainer = styled.div`
  width: 134px;
  margin: 24px 0;
`;

const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 22px;

  p {
    font-weight: bold;
  }
`;

const OptionImageContainer = styled.div`
  padding: 6px;
  background: #121316;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 14px;
`;
