import { useContext } from "react";
import { Context } from "./Context/Context";

/* eslint-disable react/prop-types */
function Color({ color }) {
  const { setColor } = useContext(Context);
  return (
    <div
      className="w-6 h-6 ml-4 hover:cursor-pointer rounded-md"
      style={{ backgroundColor: color }}
      onClick={() => setColor(color)}
    ></div>
  );
}

export default Color;
