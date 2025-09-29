import  Home from "./pages/Home"
import  About from './pages/About'

import { Routes, Route } from "react-router-dom";
import CountContextProivder from "./countContext"

export default function App() {
  return (
    <>
      <CountContextProivder>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="*" element={<div>Not Found any Page</div>}></Route>

          </Routes>
      </CountContextProivder>
    </>
  );
}
