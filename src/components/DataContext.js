import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [data, setData] = useState([]);

  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <DataContext.Provider value={{ data, updateData }}>
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
