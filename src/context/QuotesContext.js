
import { createContext, useState } from 'react';

const QuotesContext = createContext();

export function QuotesContextProvider({ children }) {
  const [option, setOption] = useState('main');
  const [quotes, setquotes] = useState(null)
  const context = {
    option,
    quotes,
    setOption,
    setquotes
  };

  return (
    <QuotesContext.Provider value={context}>
      {children}
    </QuotesContext.Provider>
  );
}

export default QuotesContext;