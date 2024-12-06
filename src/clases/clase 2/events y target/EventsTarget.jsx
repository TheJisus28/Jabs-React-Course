function EventsTarget() {
  function aumentar(e) {
    e.target.previousElementSibling.innerHTML =
      Number(e.target.previousElementSibling.innerHTML) + 1;
  }

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/4 h-auto sm:h-[50vh] bg-slate-200 m-auto rounded-xl overflow-hidden">
        <div className="bg-sky-400 h-1/2 text-center flex items-center justify-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          0
        </div>
        <button
          className="w-full h-1/2 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl"
          onClick={aumentar}
        >
          Aumentar
        </button>
      </div>
    </div>
  );
}

export default EventsTarget;
