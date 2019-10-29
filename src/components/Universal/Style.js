import styled from "@emotion/styled";
import { css } from "@emotion/core";
import background from "../../inc/img/food-background-3.jpeg";

// Global
export const Inherit = css`
  @import url("https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap");
  @import url("https://fonts.googleapis.com/css?family=Teko&display=swap");
  @import url("https://fonts.googleapis.com/css?family=Staatliches&display=swap");

  @font-face {
    font-family: "babyloveregular";
    src: url("/static/fonts/babylove-zgwx-webfont.woff2") format("woff2"),
      url("/static/fonts/babylove-zgwx-webfont.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  h3,
  h4,
  h6 {
    font-family: "Roboto Condensed", sans-serif;
    color: #505050;
    text-transform: capitalize;
  }
  h1,
  h2 {
    margin: 0;
    font-family: "Staatliches", cursive;
  }
  h1 {
    font-size: 36px;
  }
  h2 {
    margin-bottom: 20px;
  }

  .the-steps-header,
  .buttons,
  .dish-number,
  .results,
  h5 {
    font-family: "Teko", sans-serif;
  }

  body {
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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
    font-size: 19px;
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

export const Select = styled.select`
  border: 0;
  height: 45px;
  width: 100%;
  outline: none;
  font-size: 14px;
  cursor: pointer;
`;
