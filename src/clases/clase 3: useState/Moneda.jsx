/* eslint-disable react/prop-types */
function Moneda(props) {
  return (
    <>
      <label htmlFor={props.moneda}>{props.moneda}</label>
      <input
        id={props.moneda}
        type={props.type}
        value={props.cambio == 0 ? " " : props.cambio}
        readOnly={props.readonly}
        className="border border-orange-500 h-10 inline-block mb-5 text-center"
        onChange={(e) =>
          e.target.value < 0
            ? (e.target.value = " ")
            : props.onChange?.(e.target.value)
        }
      />
    </>
  );
}

export default Moneda;
