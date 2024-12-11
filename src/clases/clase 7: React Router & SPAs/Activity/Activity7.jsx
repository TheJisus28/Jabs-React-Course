import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar";
import King from "./pages/King/king";

function Activity7() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/king/:king" element={<King />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Activity7;
