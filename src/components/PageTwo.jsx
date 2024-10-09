import React from "react";
import NavigationButtons from "./NavigationButtons";

const Page2 = () => {
  return (
    <div>
      <h1>Page 2</h1>
      <NavigationButtons prevPage="/page1" nextPage="/page3" />
    </div>
  );
};

export default Page2;
