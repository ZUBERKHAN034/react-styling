import React from "react";
import { getGreetWithColor } from "./greeting";

function Greeting() {
  const name = "John Duo";
  const greet = getGreetWithColor();
  return (
    <div>
      <h1
        className="heading"
        style={{ color: `${greet.color}` }}
      >{`${greet.massage} ${name}`}</h1>
    </div>
  );
}

export default Greeting;
