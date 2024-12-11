import { useParams } from "react-router-dom";
function Page4() {
  const data = useParams();
  return (
    <div className="w-screen h-[calc(100vh-70px)] flex flex-col items-center justify-center">
      <h1 className="text-8xl font-bold text-black">Page 4</h1>
      <p className="absolute bottom-0 p-2 ">From path: {data.letter}</p>
    </div>
  );
}

export default Page4;
