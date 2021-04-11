import React from "react";
import {useSelector} from 'react-redux';


export default function PizzaQuestion() {
  const user = useSelector((state) =>state.name);
  return <p>How many people are we dealing with, {name}?</p>;
}
