import { useContext } from "react";
import { Context } from "./Context/Context";

function Page1() {
  const { color } = useContext(Context);
  return (
    <div
      className="w-1/3 text-center h-[calc(100vh-70px)] border border-gray-300"
      style={{ background: color }}
    >
      page 1{color}
    </div>
  );
}

export default Page1;
