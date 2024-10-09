import React from "react";
import NavigationButtons from "./NavigationButtons";

const Page4 = () => {
  return (
    <div>
      <h1>Page 4</h1>
      <NavigationButtons prevPage="/page3" nextPage="/page5" />
    </div>
  );
};

export default Page4;
