import React from "react";
import "./QuoteContainer.css";

const QuoteContainer = ({ quoteData, fetchQuote }) => {
  return (
    <div className="quoteContainer">
      <div className="quoteHeader">Generate a random quote!</div>
      {quoteData ? (
        <>
          <div className="quoteContent">{quoteData?.content}</div>
          <div className="quoteAuthor">- {quoteData?.originator.name} </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
      <div className="genBtn" onClick={fetchQuote}>
        Generate Quote
      </div>
    </div>
  );
};

export default QuoteContainer;
