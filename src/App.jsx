import Navbar from "./components/Navbar";
import QuoteContainer from "./components/QuoteContainer";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [quoteData, setQuoteData] = useState(null);
  const [loading, setLoading] = useState(true);
  const options = {
    method: "GET",
    url: "https://quotes15.p.rapidapi.com/quotes/random/",
    headers: {
      "x-rapidapi-host": "quotes15.p.rapidapi.com",
      "x-rapidapi-key": "fbadd1a26dmsh4f2f7bf5532d526p1b4f2ajsne34238bb9894",
    },
  };
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await axios.request(options);
        setQuoteData(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    return fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const res = await axios.request(options);
      console.log(res.data);
      console.log(quoteData);
      setQuoteData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="App">
      <Navbar />
      <QuoteContainer
        quoteData={quoteData}
        setQuoteData={setQuoteData}
        fetchQuote={fetchQuote}
      />
    </div>
  );
}

export default App;
