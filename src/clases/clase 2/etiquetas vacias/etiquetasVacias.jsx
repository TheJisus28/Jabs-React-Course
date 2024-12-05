// import { Fragment } from "react";

function etiquetasVacias() {
  return (
    // con las etiquetas vacias podemos agrupar otras etiquetas html sin necesidad de utilizar las ya existentes de manera inncesaria.

    // De la misma manera si quisieramos podriamos usar etiquetas
    // <Fragment></Fragment> pero para ellos tendriamos que importarlas desde react
    <>
      <h1>Titulo</h1>
      <h2>Subtitulo</h2>
      <p>Parrafo</p>
    </>
  );
}

export default etiquetasVacias;
