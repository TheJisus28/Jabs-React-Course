import { useContext, useState } from "react";
import { Context } from "../Context/Context";
import Professor from "./Professor";
import Button from "./Button";
import CourseInformation from "./CourseInformation";
import Location from "./Location";

function Information() {
  const { data } = useContext(Context);
  const [activeComponent, setActiveComponent] = useState(null);

  // Función para alternar entre el profesor y la ubicación
  const toggleComponent = (component) => {
    setActiveComponent(activeComponent === component ? null : component);
  };

  return (
    <div className="flex flex-col items-center px-6 sm:px-8 lg:px-10 py-6 sm:py-8 lg:py-10 max-w-4xl mx-auto">
      {/* {Course information} */}
      <CourseInformation title={data.title} text={data.text} />

      {/* Professor information */}
      <section className="max-w-md w-full">
        {/* Professor and Location Toggle Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 ">
          <Button
            text={data.button1}
            onClick={() => toggleComponent("professor")}
          />
          <Button
            text={data.button2}
            onClick={() => toggleComponent("location")}
          />
        </div>

        {/* {Render selected component} */}
        {activeComponent === "professor" && (
          <Professor
            button1={data.button1}
            photo={data.photo}
            name={data.name}
          />
        )}

        {activeComponent === "location" && (
          <Location button2={data.button2} address={data.address} />
        )}
      </section>
    </div>
  );
}

export default Information;
