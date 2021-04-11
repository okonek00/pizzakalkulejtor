import React from "react";

export default function PizzaAnswer(props) {
  return <h3>{props.name}, you should probably order {props.numberOfPeople/2} pizzas!</h3>;
}
