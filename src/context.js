import React, { useCallback, useContext, useEffect, useState } from 'react';
import { BASE_URL_QUOTE } from './constants/api';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [quote, setQuote] = useState([]);
  const fetchQuotes = useCallback(async () => {
    try {
      const response = await fetch(`${BASE_URL_QUOTE}`);
      const data = await response.json();
      setQuote(data);
    } catch (err) {
      console.log(err);
    }
  });

  useEffect(() => {
    fetchQuotes();
  }, [fetchQuotes]);
  return (
    <AppContext.Provider value={{ quote, setQuote }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
