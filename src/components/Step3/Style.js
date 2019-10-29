import styled from "@emotion/styled";
import { css } from "@emotion/core";

// Styling helpers
export const Flex = styled.div`
  display: flex;
`;

// Selecting dishes
export const SelectDishWrapper = styled.div`
  margin-bottom: 10px;
  border: 1px solid lightgrey;
  border-radius: 3px;
`;
export const SelectInnerWrapper = styled.div`
  margin: 0 15px 15px 15px;
`;

// Buttons
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
