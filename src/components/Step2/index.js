import React, { Fragment } from "react";
import { Select } from "../Universal/Style";

const Step2 = ({
  data,
  currentStep,
  selectRestaurant,
  onChange,
  restaurantError
}) => {
  if (currentStep === 2) {
    return (
      <Fragment>
        <h2>Restaurant Selection</h2>
        <Select
          name="selectRestaurant"
          value={selectRestaurant}
          onChange={onChange}
        >
          <option disabled value="Select a restaurant">
            Select a restaurant
          </option>
          {data.map((restaurant, i) => (
            <option key={i} value={restaurant}>
              {restaurant}
            </option>
          ))}
        </Select>
        {restaurantError.length > 0 && (
          <p className="notification-error">{restaurantError}</p>
        )}
      </Fragment>
    );
  }
  return "";
};

export default Step2;
