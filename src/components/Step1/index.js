import React, { Fragment } from "react";
import { Select, InputNumber } from "../Universal/Style";

const Step1 = ({
  currentStep,
  mealType,
  people,
  onChange,
  mealTypeError,
  peopleError
}) => {
  if (currentStep === 1) {
    const selectOptions = ["breakfast", "lunch", "dinner"];
    return (
      <Fragment>
        <h2>Meal type selection</h2>
        <h4>Select a meal</h4>
        <Select
          className="mealSelect"
          name="mealType"
          value={mealType}
          onChange={onChange}
        >
          <option disabled value="Select meal type">
            Select meal type
          </option>
          {selectOptions.map(meal => (
            <option key={meal} value={meal}>
              {meal}
            </option>
          ))}
        </Select>
        {mealTypeError.length > 0 && (
          <p className="notification-error">{mealTypeError}</p>
        )}

        <h4>Select number of people</h4>
        <InputNumber
          className="numberInput"
          type="number"
          name="people"
          value={people}
          onChange={onChange}
          min="0"
          max="10"
          step="0.5"
        />
        {peopleError.length > 0 && (
          <p className="notification-error">{peopleError}</p>
        )}
      </Fragment>
    );
  }
  return "";
};

export default Step1;
