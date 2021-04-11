import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import PizzaCalculator from "./components/PizzaCalculator";
import "./style.css";
import ResetButton from "./components/ResetButton";
import {useDispatch} from 'react-redux';

export default function App() {
  const [name, setName] = useState('imie');

  const dispatch = useDispatch

  const onUserChange = (e) => {
    dispatch ({type: 'CHANGE_USER_NAME', payload: e.target.value})
  };

  const resetUsername = () => {
    setName("");
  };

  return (
    <div>
      <Navigation />
      <main>
        <div className="userNameSection">
          <label>Your name: </label>
          <input value={name} onChange={onUserChange} />
        </div>
        <Title />
        <PizzaCalculator />
        <ResetButton resetClickFunction={resetUsername}/>
      </main>
    </div>
  );
}
