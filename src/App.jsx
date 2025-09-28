import Home from "./page/Home"
// import About from "./components/About"

import { Routes, Route } from "react-router-dom";
import CountContextProivder from "./components/countContext"

export default function App() {
  return (
    <>
      <CountContextProivder>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/About" element={<About />}></Route> */}
        </Routes>
      </CountContextProivder>
    </>
  );
}
