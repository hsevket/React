import { useState } from "react";

const colors = ["white", "red", "blue", "green", "yellow", "orange"];

const rand = () => Math.floor(Math.random() * 6);

const Cube = () => {

  const [myColor, setColor] = useState(colors[rand()]);

  return (
    <button
      type="button"
      onClick={() => setColor(colors[rand()])}
      className="cube"
      style={{ backgroundColor: myColor }}
    >
      {" "}
    </button>
  );
};

export default Cube;
