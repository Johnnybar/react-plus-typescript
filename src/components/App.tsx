import React from "react";
import pizzas from "../data/pizzas.json";
import Pizza from "./Pizza";
import AppCSS from "./App.module.css";
import Cart from "./Cart";
import { ReactComponent as PizzaSVG } from "../svg/pizza.svg";
// const PizzaSVG = require("../svg/pizza.svg");

const App = () => {
  return (
    <div className={AppCSS.container}>
      <div className={AppCSS.header}>
        <PizzaSVG width="200px" height="200px" />
        <div className="siteTitle">Delicious Pizza</div>
        <Cart />
      </div>
      <ul>
        {pizzas.map((pizza) => {
          return <Pizza key={pizza.id} pizza={pizza} />;
        })}
      </ul>
    </div>
  );
};

export default App;
