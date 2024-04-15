import { createContext, useContext, useState, useCallback } from "react";

const SearchContext = createContext();

export const useSearch = () => {
  return useContext(SearchContext);
};

const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const setSearchQueryWithDebounce = useCallback(
    debounce((query) => {
      setSearchQuery(query);
    }, 500),
    []
  );

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQueryWithDebounce,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
