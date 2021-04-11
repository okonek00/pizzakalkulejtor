import React from "react";

export default function PizzaForm(props) {

  const onInputChange = e => {
    props.setNumberOfPeople(e.target.value);
  };

  return (
    <div>
      <label>Enter number of people: </label>
      <input value={props.numberOfPeople} onChange={onInputChange} type="number" />
    </div>
  );
}
