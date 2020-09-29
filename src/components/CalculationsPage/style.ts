import styled from "styled-components";

export const CalculationsContent = styled.div`
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  flex: 1;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #423144;
  @media (max-width: 768px) {
    font-size: 15px;
    width: 90%;
    margin: 0 auto;
  }
`;

export const FormOptions = styled.div`
  display: flex;
  width: 30%;
  margin: 15px auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SelectContainer = styled.div`
  width: 100%;
  & label {
    margin-right: 5px;
  }
  & select,
  & select option {
    border-radius: 8px;
    border: 0;
    background: #ffdbc5;
    padding: 3px 1px;
    transition: 0.2s;
    cursor: pointer;
    outline: none;
    &:hover {
      color: #cf1b1b;
    }
  }
`;

export const InputContainer = styled.div`
  margin: 15px 0;
  & input {
    border: 0;
    background: #ffdbc5;
    color: #423144;
    font-weight: 700;
    padding: 5px 10px;
    border-radius: 12px;
    outline: none;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04), 0 2px 2px rgba(0, 0, 0, 0.04),
      0 4px 4px rgba(0, 0, 0, 0.04), 0 8px 8px rgba(0, 0, 0, 0.04),
      0 16px 16px rgba(0, 0, 0, 0.04);
  }
`;

export const CalculateButtonContainer = styled.div`
  margin-top: 35px;
  button,
  a {
    outline: none;
    padding: 10px 25px;
    border: 0;
    border-radius: 12px;
    text-decoration: none;
    color: #ffdbc5;
    background: #cf1b1b;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      color: #cf1b1b;
      background: #ffdbc5;
    }
  }
`;
