import { useEffect, useState } from "react";

function Actividad1Clase5() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = () => {
    const url = "https://api.chucknorris.io/jokes/random";
    const result = fetch(url);
    result
      .then((data) => data.json())
      .then((data) => setJoke(data.value))
      .catch(() => console.log("something was wrong"));
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center text-xl font-sans p-4">
      <h2 className="font-bold text-2xl mb-8 text-center md:text-3xl lg:text-4xl">
        CHUCK NORRIS JOKES
      </h2>
      <div className="w-full max-w-lg h-auto shadow-md shadow-black flex flex-col rounded-xl overflow-hidden bg-white">
        <div className="p-4 flex-1 bg-slate-100 flex items-center justify-center text-center text-base sm:text-lg md:text-xl">
          {joke}
        </div>
        <button
          onClick={getJoke}
          className="py-2 bg-blue-400 text-white font-bold hover:bg-blue-500 transition-all focus:outline-none focus:ring-2 focus:ring-blue-300 sm:text-lg md:py-3"
        >
          Next Joke
        </button>
      </div>
    </div>
  );
}

export default Actividad1Clase5;
