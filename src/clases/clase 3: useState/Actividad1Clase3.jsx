import { useState } from "react";
import Moneda from "./Moneda";
import cambios from "./cambios";

function Actividad1Clase3() {
  const [euro, setEuro] = useState(0);

  return (
    <div className="flex flex-col text-center w-1/4 mx-auto mt-48">
      <Moneda
        moneda={"Euro"}
        type={"number"}
        onChange={(valor) => setEuro(Number(valor))}
      />
      {cambios.map((element) => (
        <Moneda
          moneda={element.moneda}
          type={"text"}
          readonly={true}
          key={element.moneda}
          cambio={(element.cambio * euro).toFixed(2)}
        />
      ))}
    </div>
  );
}

export default Actividad1Clase3;
