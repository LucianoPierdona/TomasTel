import styled from "styled-components";

// Styling for the result page
export const ResultContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  & h1 {
    color: #423144;
  }
`;

export const ResultBlock = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
    margin: 20px auto;
  }
`;

export const Card = styled.div`
  text-align: center;
  width: 100%;
  & h1 {
    font-size: 26px;
  }
  & p {
    font-weight: 500;
    & strong#red {
      color: #cf1b1b;
    }
    & strong#green {
      color: #10fa10;
    }
  }
  @media (max-width: 768px) {
    & h1 {
      font-size: 22px;
    }
  }
`;
