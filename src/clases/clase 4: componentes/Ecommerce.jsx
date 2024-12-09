import { useState } from "react";
import Product from "./Product";
import products from "./products";

function Ecommerce() {
  const [total, SetTotal] = useState(0);

  const updateTotal = (price) => {
    SetTotal((prevTotal) => {
      const newTotal = prevTotal + price;
      return Number(newTotal.toFixed(2));
    });
  };

  return (
    <div className="absolute">
      <div className="bg-lime-400 h-1/6 w-full">
        <div className=" fixed  text-white p-4 font-sans sm:text-2xl md:text-3xl lg:text-4xl w-full bg-slate-900">
          <p>
            Total: <span>{total}</span> $
          </p>
        </div>
      </div>

      <div className=" mt-14">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-8 p-8">
          {products.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              changeTotal={updateTotal}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
