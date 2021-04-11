import React, { useState} from "react";
import PizzaQuestion from "./PizzaQuestion";
import PizzaForm from "./PizzaForm";
import PizzaAnswer from "./PizzaAnswer";



export default function PizzaCalculator(props) {
  const [numberOfPeople, setNumberOfPeople] = useState(10);
  return (
    <section>
      <PizzaQuestion name={props.name} />
      <PizzaForm 
        numberOfPeople={numberOfPeople}
        setNumberOfPeople={setNumberOfPeople}/>
      <hr />
      <PizzaAnswer name={props.name} numberOfPeople={numberOfPeople}/>
    </section>
  );
}
