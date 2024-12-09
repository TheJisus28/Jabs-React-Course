import Color from "./Color";

function Colors() {
  return (
    <div className=" border-t-2  flex p-5 text-xl items-center">
      <p>Colors: </p>
      <Color color="#4285f4"></Color>
      <Color color="#ea4335"></Color>
      <Color color="#fbbc05"></Color>
      <Color color="#34a853"></Color>
    </div>
  );
}

export default Colors;
