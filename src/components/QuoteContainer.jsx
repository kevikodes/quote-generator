import React from "react";
import "./QuoteContainer.css";

const QuoteContainer = () => {
  return (
    <div className="quoteContainer">
      <div className="quoteHeader">Generate a new random quote!</div>
      <div className="quoteContent">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum culpa
        dolorum dignissimos, a explicabo veritatis!
      </div>
      <div className="quoteAuthor">- Kevin R Owens III</div>
      <div className="genBtn">Generate Quote</div>
    </div>
  );
};

export default QuoteContainer;
