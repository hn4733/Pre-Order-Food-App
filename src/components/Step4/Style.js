import styled from "@emotion/styled";

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
export const DishResultWrapper = styled.div`
  border: 1px solid gray;
  padding: 5px 15px;
  margin-bottom: 7px;
  border-radius: 3px;
`;
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
