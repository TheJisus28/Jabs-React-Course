import spain from "../assets/images/spain.jpg";
import france from "../assets/images/france.png";
import uk from "../assets/images/uk.png";
import Info from "../assets/information";

import Flag from "./Flag";

function FlagsBar() {
  return (
    <div className="flex w-screen  justify-evenly p-4 shadow-md shadow-black ">
      <Flag flagImg={spain} information={Info[0]}></Flag>
      <Flag flagImg={uk} information={Info[1]}></Flag>
      <Flag flagImg={france} information={Info[2]}></Flag>
    </div>
  );
}

export default FlagsBar;
