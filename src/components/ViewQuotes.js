import { CardApp } from "./CardApp";
export const ViewQuotes = ({quotes}) => {
  console.log(quotes)
  return (
    <div className="flex flex-wrap justify-center">
      {quotes.map((quote) => (
        < div key={quote.id}> 
          <CardApp
            key={quote.id}
            author={quote.book}
            reference={quote.book}
            quote={quote.text}
            
          />
        </div>
      ))}
    </div>
  );
};
