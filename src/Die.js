import React from "react";
import "./Die.css";

function Die(props) {
  let die = "";
  switch (props.dice) {
    case 1:
      die = "fa-dice-one";
      break;
    case 2:
      die = "fa-dice-two";
      break;
    case 3:
      die = "fa-dice-three";
      break;
    case 4:
      die = "fa-dice-four";
      break;
    case 5:
      die = "fa-dice-five";
      break;
    case 6:
      die = "fa-dice-six";
  }

  let randDieClass = die + " fas fa-10x";

  return (
    <div className={props.rolling ? "shaking Die" : "Die"}>
      {/* <p>{props.dice}</p> */}
      <i className={randDieClass} />
    </div>
  );
}

export default Die;
