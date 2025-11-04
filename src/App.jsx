// pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import Services from "./pages/Services/Services";

// Layout
import Layout from "./Layout/Layout";

// counter context
import CounterContextProvider from "./context/CounterContext/CounterContext";



//routes  and  route
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
<CounterContextProvider>


      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>


</CounterContextProvider>

    </>
  );
}
