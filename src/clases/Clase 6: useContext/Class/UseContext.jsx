import Colors from "./Colors";
import { Data } from "./Context/Context";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

function UseContext() {
  return (
    <Data>
      <div className="flex">
        <Page1></Page1>
        <Page2></Page2>
        <Page3></Page3>
      </div>
      <Colors></Colors>
    </Data>
  );
}

export default UseContext;
