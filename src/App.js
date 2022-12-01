import { useState, useEffect } from "react";
import { ViewQuotes } from "./components/ViewQuotes";
import { useContext } from "react";
import { QuoteForm } from "./components/QuoteForm";
import QuotesContext from "./context/QuotesContext";
import useSWR from "swr";
import { CardSkeleton } from "./components/CardSkeleton";
export const performFetch = async (url, options) => {
  const res = await fetch(url, { method: "GET" });
  return res.json();
};

export const App = () => {
  const { data: dataQuotes } = useSWR(
    "http://localhost:8000/quotes/list",
    performFetch
  );
  const { data: dataAuthors } = useSWR(
    "http://localhost:8000/quotes/authors",
    performFetch
  );
  const { data: dataBooks } = useSWR(
    "http://localhost:8000/quotes/books",
    performFetch
  );
  const [views, setViews] = useState("quotes");
  const { option } = useContext(QuotesContext);
  if (!dataBooks || !dataBooks || !dataAuthors) {
    return (
      <>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </>
    );
  }
    switch (option) {
    case "main":
      return (
        <>
          <ViewQuotes quotes={dataQuotes}/>
        </>
      );
    case "upload":
      return (
        <>
          <QuoteForm authors={dataAuthors} books={dataBooks}/>
        </>
      );
    default:
      break;
  }
};

export default App;
