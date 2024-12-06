import { useRef } from "react";

function HookUseRef() {
  const refDolar = useRef();
  const refCop = useRef();
  const dolarToPeso = 3600;

  function convertir() {
    const dolarValue = Number(refDolar.current.value);
    const result = dolarValue * dolarToPeso;
    const formattedResult = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "COP",
    }).format(result);

    refCop.current.value = formattedResult;
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      <div className="bg-neutral-200 w-1/4 h-[50vh] flex flex-col rounded-xl overflow-hidden">
        <div className="h-1/3 w-full bg-violet-200 flex justify-center items-center">
          <input
            ref={refDolar}
            type="text"
            className="p-2 rounded text-center"
            placeholder="Ingrese numero en dolares"
          />
        </div>
        <div className="h-1/3 w-full bg-violet-300 flex justify-center items-center">
          <button onClick={convertir} className="w-full h-full">
            Convertir
          </button>
        </div>
        <div className="h-1/3 w-full bg-violet-400 flex justify-center items-center">
          <input
            ref={refCop}
            type="text"
            className="p-2 rounded text-center"
            placeholder="valors en COPs"
          />
        </div>
      </div>
    </div>
  );
}

export default HookUseRef;
