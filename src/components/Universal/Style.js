import styled from "@emotion/styled";
import { css } from "@emotion/core";

// Global
export const Inherit = css`
  @import url("https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap");
  @import url("https://fonts.googleapis.com/css?family=Teko&display=swap");

  h1,
  h2,
  h3,
  h4,
  h6 {
    font-family: "Roboto Condensed", sans-serif;
  }
  h1 {
    margin: 0;
  }

  .the-steps-header,
  .buttons,
  .dish-number,
  .results,
  h5 {
    font-family: "Teko", sans-serif;
  }

  .results {
    font-size: 20px;
  }
  .submission-text {
    font-family: sans-serif;
    font-size: 16px;
  }
  .dish-number {
    font-size: 26px;
  }
  .result-heading {
    font-size: 21px;
    padding-bottom: 5px;
    border-bottom: 1px solid lightgray;
    margin-bottom: 26px;
  }
  .chosen-results {
    margin: 5px 0;
  }
  .result-dish-separator {
    display: flex;
    align-items: center;
  }
  .result-dish-separator:first-of-type {
    border-bottom: 1px solid lightgray;
  }
  .sub-heading-dish {
    font-size: 21px;
    margin: 0;
    width: 110px;
  }

  .h3-submitted {
    margin-top: 40px;
    border-bottom: 1px solid lightgray;
    padding-bottom: 10px;
  }
  .h4-submitted {
    margin-top: 0;
  }

  .notification-error {
    margin-top: 20px;
    padding: 5px 0;
    text-align: center;
    background-color: steelblue;
    font-size: 14px;
    color: white;
    font-family: "Roboto Condensed", sans-serif;
  }
`;

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

// Styling helpers
export const Flex = styled.div`
  display: flex;
`;

// Results
export const ResultsWrapper = styled.div`
  margin-bottom: 20px;

  @media (max-width: 634px) {
    width: 100%;

    .chosen-heading {
      font-size: 19px;
    }
  }
`;
export const ResultsMain = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-flow: row wrap;
  }
`;
export const Row = styled.div`
  border-radius: 4px;
  padding: 0px 17px;
  text-align: center;

  @media (max-width: 500px) {
    display: flex;
    flex: 0 0 100%;
    padding: 0;
    text-align: left;
    flex-flow: row wrap;

    .result-heading {
      width: 100%;
      margin-top: 10px;
      margin-bottom: 13px;
      font-size: 19px;
    }
    .results {
      margin-top: 0;
    }
  }
`;

// Multi-step form
export const MultiStepWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;

  @media (max-width: 634px) {
    display: block;
    width: auto;
    margin: 40px auto;
    max-width: 100%;
    padding: 0 10px;

    .wrapper-optimise {
      display: flex;
      flex-flow: row wrap;

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
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  width: 130px;
  height: 35px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 500;
  padding-top: 4px;
  border-top: 4px solid ${props => (props.active ? "#f6a720" : "#505050")};
  background-color: ${props => (props.active ? "#424c58" : "lightgray")};
  color: ${props => (props.active ? "white" : "black")};

  @media (max-width: 634px) {
    border-radius: 0;
    width: 140px;
  }
  @media (max-width: 382px) {
    font-size: 15px;
    height: 19px;
  }
`;
export const SelectDishWrapper = styled.div`
  margin-bottom: 10px;
  border: 1px solid lightgrey;
  border-radius: 3px;
`;
export const SelectInnerWrapper = styled.div`
  margin: 0 15px 15px 15px;
`;
export const DishResultWrapper = styled.div`
  border: 1px solid gray;
  padding: 5px 15px;
  margin-bottom: 7px;
  border-radius: 3px;
`;

// Inputs and Selects
export const Select = styled.select`
  border: 0;
  height: 45px;
  width: 100%;
  outline: none;
  font-size: 14px;
  cursor: pointer;
`;
export const InputNumber = styled.input`
  outline: none;
  height: 25px;
  width: 40px;
  padding-left: 15px;
  border-radius: 3px;
  border: 1px solid darkgray;
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
export const AddRemoveButtons = styled.div`
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  width: 100%;
  padding: 0px 10px;
  background-color: #009083;
  border-radius: 0;
  text-align: center;
  :hover {
    background-color: #169a8e;
  }
  ${props =>
    props.remove &&
    css`
      background-color: #d50216;
      border: 1px solid #ff7260;
      :hover {
        background-color: #c82434;
        border: 1px solid #c82434;
      }
    `}
`;
export const SubmitButton = styled.button`
  ${buttonCopy};
`;
