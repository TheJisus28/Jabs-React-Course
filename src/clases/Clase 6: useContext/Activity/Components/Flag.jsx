import { useContext } from "react";
import { Context } from "../Context/Context";

/* eslint-disable react/prop-types */
function Flag({ flagImg, information }) {
  const { setData } = useContext(Context);
  return (
    <div
      className="w-12 sm:w-16 md:w-20 lg:w-24 hover:cursor-pointer"
      onClick={() => setData(information)}
    >
      <img src={flagImg} alt="flag" />
    </div>
  );
}

export default Flag;
