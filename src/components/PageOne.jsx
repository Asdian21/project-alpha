import React from "react";
import { useNavigate } from "react-router-dom";
import NavigationButtons from "./NavigationButtons";

const Page1 = () => {
  return (
    <div>
      <h1>Page 1</h1>
      <NavigationButtons nextPage="/page2" />
    </div>
  );
};

export default Page1;
