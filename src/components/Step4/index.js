import React, { Fragment } from "react";
import {
  Row,
  DishResultWrapper,
  ResultsWrapper,
  ResultsMain
} from "../Universal/Style";

const Step4 = ({ currentStep, mealType, people, selectRestaurant, dish }) => {
  if (currentStep === 4) {
    return (
      <Fragment>
        <ResultsWrapper>
          <h2>Order Review</h2>
          <ResultsMain>
            <Row>
              <h4 className="result-heading">Meal</h4>
              <p className="results">{mealType}</p>
            </Row>
            <Row>
              <h4 className="result-heading">No. of people</h4>
              <p className="results">{people}</p>
            </Row>
            <Row>
              <h4 className="result-heading">Restaurant</h4>
              <p className="results">{selectRestaurant}</p>
            </Row>
          </ResultsMain>
          <div>
            <h4 className="result-heading">Chosen dishes - {dish.length}</h4>
            {dish.map((dishObject, i) => (
              <DishResultWrapper key={i}>
                <div className="result-dish-separator">
                  <h5 className="sub-heading-dish">Dish Name:</h5>
                  <p className="results chosen-results">
                    {dishObject.dishName}
                  </p>
                </div>
                <div className="result-dish-separator">
                  <h5 className="sub-heading-dish">Servings:</h5>
                  <p className="results chosen-results">
                    {dishObject.servings}
                  </p>
                </div>
              </DishResultWrapper>
            ))}
          </div>
        </ResultsWrapper>
      </Fragment>
    );
  }
  return "";
};

export default Step4;
