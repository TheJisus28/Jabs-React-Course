import { useContext } from "react";
import { Context } from "./Context/Context";

function Page3() {
  const { color } = useContext(Context);
  return (
    <div
      className="w-1/3 text-center h-[calc(100vh-70px)] border border-gray-300"
      style={{ background: color }}
    >
      page 3
      <br />
      {color}
    </div>
  );
}

export default Page3;
