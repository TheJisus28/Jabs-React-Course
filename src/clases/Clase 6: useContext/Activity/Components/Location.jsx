/* eslint-disable react/prop-types */
function Location({ button2, address }) {
  return (
    <div className="w-full  flex flex-col text-center justify-center mt-5 rounded-md bg-teal-base text-white px-4 py-2">
      <h2 className="text-2xl font-bold">{button2}</h2>
      <p className="text-xl ">{address}</p>
    </div>
  );
}

export default Location;
