import React from "react";
import NavigationButtons from "./NavigationButtons";

const Page3 = () => {
  return (
    <div>
      <h1>Page 3</h1>
      <NavigationButtons prevPage="/page2" nextPage="/page4" />
    </div>
  );
};

export default Page3;
