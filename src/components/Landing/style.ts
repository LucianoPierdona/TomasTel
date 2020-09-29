import styled from "styled-components";

// Estilização
export const LandingContent = styled.div`
  padding: 100px 0;
  & h1 {
    color: #423144;
    font-size: 35px;
  }
  & p {
    color: #cf1b1b;
    font-size: 20px;
    margin-bottom: 30px;
  }
  & a {
    padding: 15px 25px;
    border-radius: 12px;
    text-decoration: none;
    color: #ffdbc5;
    background: #cf1b1b;
    transition: 0.2s;
    &:hover {
      color: #cf1b1b;
      background: #ffdbc5;
    }
  }
  @media (max-width: 768px) {
    width: 95%;
    margin: 0 auto;
    h1 {
      font-size: 25px;
    }
    p {
      width: 90%;
      margin: 0 auto 25px auto;
      font-size: 15px;
    }
  }
`;
