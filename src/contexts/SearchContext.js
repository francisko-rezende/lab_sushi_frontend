import { createContext, useState } from "react";

export const SearchContext = createContext({})

export const SearchProvider = ({ children }) => {
  const [searchedTerm, setSearchedTerm] = useState('')


  return <SearchContext.Provider value={{ setSearchedTerm, searchedTerm }}>{children}</SearchContext.Provider>
}