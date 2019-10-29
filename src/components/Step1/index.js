import React, { Fragment } from "react";
import { Select } from "../Universal/Style";

const Step1 = ({
  currentStep,
  mealType,
  people,
  onChangeFn,
  mealTypeError,
  peopleError
}) => {
  if (currentStep === 1) {
    const selectOptions = ["breakfast", "lunch", "dinner"];
    const selectPeopleOptions = Array.from({ length: 10 });
    return (
      <Fragment>
        <h2>Meal type selection</h2>
        <h4>Select a meal</h4>
        <Select
          className="mealSelect"
          name="mealType"
          value={mealType}
          onChange={onChangeFn}
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

        <h4>Select number of people</h4>
        <Select
          className="numberInput"
          name="people"
          value={people}
          onChange={onChangeFn}
        >
          <option disabled value="0">
            0
          </option>
          {selectPeopleOptions.map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </Select>
        {mealTypeError.length > 0 && (
          <p className="notification-error" style={{ marginBottom: "7px" }}>
            {mealTypeError}
          </p>
        )}
        {peopleError.length > 0 && (
          <p className="notification-error" style={{ marginTop: "0" }}>
            {peopleError}
          </p>
        )}
      </Fragment>
    );
  }
  return "";
};

export default Step1;
