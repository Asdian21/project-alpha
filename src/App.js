import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Page1 from "./components/PageOne";
import Page2 from "./components/PageTwo";
import Page3 from "./components/PageThree";
import Page4 from "./components/PageFour";
import Page5 from "./components/PageFive";
import { useNavigate } from "react-router-dom";

const NavigationButtons = ({ prevPage, nextPage }) => {
  const navigate = useNavigate();

  return (
    <div>
      {prevPage && <button onClick={() => navigate(prevPage)}>Previous</button>}
      {nextPage && <button onClick={() => navigate(nextPage)}>Next</button>}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
      </Routes>
    </Router>
  );
};

export default App;
