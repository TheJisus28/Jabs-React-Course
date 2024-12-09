import { useContext } from "react";
import { Context } from "./Context/Context";

function Page2() {
  const { color } = useContext(Context);
  return (
    <div
      className="w-1/3 text-center h-[calc(100vh-70px)] border border-gray-300"
      style={{ background: color }}
    >
      page 2{color}
    </div>
  );
}

export default Page2;
