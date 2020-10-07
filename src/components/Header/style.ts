import styled from "styled-components";

// Styling for the Header
export const HeaderContainer = styled.div`
  background: #cf1b1b;
  width: 100%;
  padding: 10px 0;
  display: flex;
  text-align: center;
  align-items: center;
  border-radius: 12px 12px 0 0;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04), 0 2px 2px rgba(0, 0, 0, 0.04),
    0 4px 4px rgba(0, 0, 0, 0.04), 0 8px 8px rgba(0, 0, 0, 0.04),
    0 16px 16px rgba(0, 0, 0, 0.04);
  & h1 {
    width: 100%;
    color: #ffdbc5;
    & span {
      color: #423144;
    }
  }
`;
