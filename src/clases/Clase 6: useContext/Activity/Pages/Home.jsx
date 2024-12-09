import FlagsBar from "../Components/FlagsBar";
import Information from "../Components/Information";
import { Data } from "../Context/Context";

function Home() {
  return (
    <Data>
      <FlagsBar></FlagsBar>
      <Information></Information>
    </Data>
  );
}

export default Home;
