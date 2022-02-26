import React from "react";
import styled from "styled-components";

export const PopUp = () => {
  return (
    <PopUpContainer>
      <AdContainer>
        <h4>Yield earned</h4>
        <p>Earn up CO 2,84% APY on your crypto</p>
        <ProfitContainer>
          <p>$0.0000066</p>
          <span>2,84% APY</span>
        </ProfitContainer>
      </AdContainer>
      <AdContainer>
        <h4>Learn and Earn</h4>
        <p>Earn up CO 2,84% APY on your crypto</p>

        <h5>Verify Identity</h5>
      </AdContainer>
    </PopUpContainer>
  );
};

const PopUpContainer = styled.div`
  grid-area: pops;
  margin-right: 24px;
`;

const AdContainer = styled.div`
  border: 1px solid #ffffff42;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;

  h4 {
    margin: 0;
    font-size: 20px;
  }
  p {
    margin: 0;
    margin-bottom: 14px;
  }

  h5 {
    color: #346df5;
    margin: 0;
    font-size: 16px;
  }
`;

const ProfitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 0;
    font-weight: bold;
    font-size: 20px;
  }

  span {
    color: #7e808a;
    font-weight: bold;
  }
`;
