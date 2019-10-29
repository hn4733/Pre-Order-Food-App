import styled from "@emotion/styled";
import { css } from "@emotion/core";

// Header
export const Header = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;

  @media (max-width: 634px) {
    flex: 0 0 100%;
  }
  @media (max-width: 382px) {
    display: block;
    text-align: center;

    img {
      margin-right: 0;
      margin-bottom: 20px;
    }
    h1 {
      font-size: 28px;
    }
  }
`;
export const Img = styled.img`
  width: 87px;
  height: 65px;
  margin-right: 40px;
`;

// Multi-step form
export const MultiStepWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;

  .wrapper-optimise {
    background-color: rgba(255, 255, 255, 0.9);
    padding: 30px 70px;
    border-radius: 8px;
  }

  @media (max-width: 634px) {
    display: block;
    width: auto;
    margin: 40px auto;
    max-width: 100%;

    .wrapper-optimise {
      display: flex;
      flex-flow: row wrap;
      padding: 30px 10px 0 10px;
      border-radius: 0;

      form {
        width: 100%;
      }
    }
  }
`;
export const StepWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  width: 549px;
  max-width: 100%;

  @media (max-width: 634px) {
    width: auto;
    flex: 0 0 100%;
  }
  @media (max-width: 382px) {
    margin-bottom: 30px;
  }
`;
export const TheStep = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 130px;
  height: 35px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 500;
  border-top: 4px solid ${props => (props.active ? "#f6a720" : "#505050")};
  background-color: ${props => (props.active ? "#424c58" : "")};
  color: ${props => (props.active ? "white" : "black")};

  .the-text {
    margin-left: 10px;
    height: 23px;
  }

  @media (max-width: 634px) {
    border-radius: 0;
    width: 140px;
  }
  @media (max-width: 535px) {
    .the-text {
      display: none;
    }
  }
  @media (max-width: 382px) {
    font-size: 15px;
    height: 19px;
  }
`;

// Buttons
export const ButtonWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
const buttonCopy = css`
  padding: 6px 10px;
  border: none;
  border-radius: 3px;
  background-color: #f6a720;
  width: 90px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  text-align: center;
  :hover {
    background-color: #f1cb34;
  }
`;
export const NavButtons = styled.div`
  ${buttonCopy};
`;
export const SubmitButton = styled.button`
  ${buttonCopy};
`;
