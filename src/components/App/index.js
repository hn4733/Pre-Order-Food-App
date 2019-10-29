import React, { Component, Fragment } from "react";
import Data from "../../data/dishes";
import { Global } from "@emotion/core";
import {
  Header,
  Img,
  MultiStepWrapper,
  StepWrapper,
  TheStep,
  ButtonWrapper,
  NavButtons,
  SubmitButton
} from "./Style";
import { Inherit } from "../Universal/Style";
import AppLogo from "../../inc/img/app-logo.png";
import FoodCharacter from "../../inc/img/food-character.png";

import Step1 from "../Step1";
import Step2 from "../Step2";
import Step3 from "../Step3";
import Step4, { Results } from "../Step4";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faStore,
  faHamburger,
  faClipboard
} from "@fortawesome/free-solid-svg-icons";

const INITIAL_STATE = {
  submitted: false,
  currentStep: 1,
  mealType: "Select meal type",
  mealTypeError: "",
  people: 0,
  peopleError: "",
  selectRestaurant: "Select a restaurant",
  restaurantError: "",
  dish: [
    {
      dishName: "Please select a dish",
      servings: 1
    }
  ],
  dishError: ""
};

class App extends Component {
  constructor() {
    super();
    this.state = { ...INITIAL_STATE };
  }

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });

    if (name === "mealType") {
      this.setState(prev => {
        return { mealTypeError: prev.mealTypeError === "" };
      });
    }
    if (name === "people") {
      this.setState(prev => {
        return { peopleError: prev.peopleError === "" };
      });
    }
    if (name === "selectRestaurant") {
      this.setState(prev => {
        return { restaurantError: prev.restaurantError === "" };
      });
    }
  };

  updateDishState = (event, id) => {
    const { name, value } = event.target;

    this.setState(prev => {
      const dish = prev.dish.map((dishInfo, i) => {
        if (i === id) {
          return {
            ...dishInfo,
            [name]: value
          };
        } else {
          return dishInfo;
        }
      });

      return { dish };
    });
  };

  addAnotherDish = () => {
    const dishChecker = this.state.dish.some(dishInfo => {
      return dishInfo.dishName === "Please select a dish";
    });
    if (!dishChecker) {
      this.setState(prev => {
        const dish = [
          ...prev.dish,
          {
            dishName: "Please select a dish",
            servings: 1
          }
        ];

        return { dish };
      });
    }
  };

  removeDish = id => {
    if (this.state.dish.length !== 1) {
      this.setState(prev => {
        const dish = prev.dish.filter((object, i) => {
          return i !== id;
        });

        return { dish };
      });
    }
  };

  nextStep = currentStep => {
    const { mealType, people, selectRestaurant, dish } = this.state;
    let errors = false;

    if (currentStep === 1) {
      if (mealType === "Select meal type" || people === 0) {
        if (mealType === "Select meal type") {
          this.setState({ mealTypeError: "Please select a meal type" });
        }
        if (people === 0) {
          this.setState({ peopleError: "Please select number of people" });
        }
        errors = true;
      } else {
        this.setState({ mealTypeError: "" });
        this.setState({ peopleError: "" });
      }
    }
    if (currentStep === 2) {
      if (selectRestaurant === "Select a restaurant") {
        this.setState({ restaurantError: "Please select a restaurant" });
        errors = true;
      } else {
        this.setState({ restaurantError: "" });
      }
    }
    if (currentStep === 3) {
      const errorCheck = dish.some(theDish => {
        return theDish.dishName === "Please select a dish";
      });
      if (errorCheck || dish.length === 0) {
        if (errorCheck)
          this.setState({ dishError: "Dish selection is missing" });
        errors = true;
      } else {
        this.setState({ dishError: "" });
      }
    }

    if (currentStep < 4 && !errors) {
      this.setState(prev => {
        return { currentStep: prev.currentStep + 1 };
      });
    }
  };

  prevStep = currentStep => {
    if (currentStep > 1) {
      this.setState(prev => {
        return { currentStep: prev.currentStep - 1 };
      });
    }
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({ submitted: true });

    const { mealType, people, selectRestaurant, dish } = this.state;

    const results = `
      Meal Type:  ${mealType},
      Number of People:  ${people},
      Restaurant Selected:  ${selectRestaurant}
    `;
    console.log("Results of order: ", results);
    console.log("Dishes Chosen: ", dish);
  };

  render() {
    const {
      submitted,
      currentStep,
      mealType,
      people,
      selectRestaurant,
      dish,
      mealTypeError,
      peopleError,
      restaurantError,
      dishError
    } = this.state;
    const date = new Date();
    const { dishes } = Data;
    const steps = [
      { name: "Meal Type", icon: faUtensils },
      { name: "Restaurant", icon: faStore },
      { name: "Dish", icon: faHamburger },
      { name: "Review", icon: faClipboard }
    ];
    let active = false;
    let newRestaurantData = new Set();
    dishes.forEach(dishInfo => newRestaurantData.add(dishInfo.restaurant));
    const newRestaurantDataArray = Array.from(newRestaurantData);

    return (
      <MultiStepWrapper>
        <div className="wrapper-optimise">
          <Global styles={Inherit} />
          <Header>
            <Img src={AppLogo} alt="pre order app logo" />
            <h1>Pre Order Food</h1>
          </Header>
          <StepWrapper>
            {steps.map((step, i) => {
              active = false;
              if (i < currentStep || i === 0) {
                active = true;
              }
              return (
                <TheStep className="the-steps-header" key={i} active={active}>
                  <FontAwesomeIcon
                    size="1x"
                    icon={step.icon}
                    style={{ height: "17px" }}
                  />
                  <div className="the-text">{step.name}</div>
                </TheStep>
              );
            })}
          </StepWrapper>
          {!submitted ? (
            <form method="post" onSubmit={event => this.onSubmit(event)}>
              <Step1
                currentStep={currentStep}
                mealType={mealType}
                people={people}
                onChangeFn={this.onChange}
                mealTypeError={mealTypeError}
                peopleError={peopleError}
              />
              <Step2
                data={newRestaurantDataArray}
                currentStep={currentStep}
                selectRestaurant={selectRestaurant}
                onChange={this.onChange}
                restaurantError={restaurantError}
              />
              <Step3
                data={dishes}
                currentStep={currentStep}
                dish={dish}
                mealType={mealType}
                selectRestaurant={selectRestaurant}
                updateDishState={this.updateDishState}
                addAnotherDish={this.addAnotherDish}
                removeDish={this.removeDish}
                dishError={dishError}
              />
              <Step4
                data={dishes}
                currentStep={currentStep}
                mealType={mealType}
                people={people}
                selectRestaurant={selectRestaurant}
                dish={dish}
              />

              <ButtonWrapper>
                {currentStep > 1 && (
                  <NavButtons
                    className="buttons previousButton"
                    onClick={() => this.prevStep(currentStep)}
                  >
                    Previous
                  </NavButtons>
                )}
                {currentStep < 4 && (
                  <NavButtons
                    className="buttons nextButton"
                    onClick={() => this.nextStep(currentStep)}
                  >
                    Next
                  </NavButtons>
                )}
                {currentStep === 4 && (
                  <SubmitButton className="buttons submitButton" type="submit">
                    Submit
                  </SubmitButton>
                )}
              </ButtonWrapper>
            </form>
          ) : (
            <Fragment>
              <h2>Order Successfully Submitted</h2>
              <p className="results submission-text">
                Your order has been submitted on {date.toDateString()}
              </p>
              <Results
                heading={"order-submit"}
                mealType={mealType}
                people={people}
                selectRestaurant={selectRestaurant}
                dish={dish}
              />
            </Fragment>
          )}
          <img
            className="food-character"
            src={FoodCharacter}
            alt="food character"
          />
        </div>
      </MultiStepWrapper>
    );
  }
}

export default App;
