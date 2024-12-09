/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Marta from "../assets/images/marta.png";
import Grace from "../assets/images/grace.png";
import Aimee from "../assets/images/aimee.png";

const images = {
  "marta.png": Marta,
  "aimee.png": Aimee,
  "grace.png": Grace,
};

function Professor({ photo, button1, name }) {
  const [image, setImage] = useState(images[photo]);

  useEffect(() => {
    const newImage = images[photo];
    setImage(newImage);
  }, [photo]);

  return (
    <>
      <div className="w-full object-contain flex flex-col text-center justify-center mt-5 rounded-md bg-teal-base  text-white px-4">
        <p className="text-2xl font-bold">{button1}</p>
        <img src={image} alt={name} className="rounded-sm" />
        <p className="text-xl ">{name}</p>
      </div>
    </>
  );
}

export default Professor;
