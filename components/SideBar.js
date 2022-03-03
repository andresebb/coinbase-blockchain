import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import coinbaseLogo from "../assets/cb-logo.png";

export const SideBar = ({ navItems }) => {
  const [activeIcon, SetactiveIcon] = useState(navItems[0].title);

  return (
    <SideBarContainer>
      <LogoContainer>
        <Image src={coinbaseLogo} alt="Picture of the author" />
      </LogoContainer>
      <div>
        {navItems.map((item, index) => {
          return (
            <NavItem key={index} onClick={() => SetactiveIcon(item.title)}>
              <NavIcon
                style={{ color: item.title === activeIcon && "#3777f5" }}
              >
                {item.icon}
              </NavIcon>
              <p>{item.title}</p>
            </NavItem>
          );
        })}
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

const NavItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  padding: 0 12px;
  border-radius: 8px;
  margin-bottom: 22px;
  cursor: pointer;

  &:hover {
    background-color: #141519;
  }

  p {
    font-weight: bold;
  }
`;

const NavIcon = styled.div`
  padding: 12px;
  font-size: 20px;
  background: #121316;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 14px;
`;
