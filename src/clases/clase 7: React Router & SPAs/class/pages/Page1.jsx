import { Link } from "react-router-dom";

function Page1() {
  return (
    <div className="w-screen h-[calc(100vh-70px)] flex flex-col items-center justify-center">
      <h1 className="text-8xl font-bold text-black">Page 1</h1>
      <Link to={"/"} className="absolute bottom-0 p-2 ">
        Ir a home
      </Link>
    </div>
  );
}

export default Page1;
