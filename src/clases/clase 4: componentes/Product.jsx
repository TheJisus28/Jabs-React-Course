/* eslint-disable react/prop-types */
import image0 from "../../public/reyes/rey_atanagildo.png";
import Button from "./Button";

function Product(props) {
  return (
    <article className=" flex flex-col items-center p-4 rounded-lg shadow-lg h-full">
      {/* Imagen del producto */}
      <div className="w-full max-w-sm">
        <img
          src={image0}
          alt="imagen"
          className="w-full h-auto object-cover rounded-md"
        />
      </div>

      {/* Información del producto */}
      <div className="flex flex-col justify-between flex-1 w-full px-4 py-4">
        <div>
          <h2 className="text-lg font-bold text-center mb-2">{props.name}</h2>
          <p className="text-sm text-gray-700 text-center mb-4">
            {props.description}
          </p>
        </div>

        {/* Precio y botón */}
        <div className="w-full flex justify-between items-center mt-4">
          <p className="text-lg font-semibold text-gray-800">${props.price}</p>
          <Button changeTotal={props.changeTotal} price={props.price} />
        </div>
      </div>
    </article>
  );
}

export default Product;
