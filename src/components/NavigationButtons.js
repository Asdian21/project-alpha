import React from "react";
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

export default NavigationButtons;
