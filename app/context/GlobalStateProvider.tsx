"use client"
import { createContext, useContext, useState } from 'react';

type ErrorType = { message: string };

type TGlobalState = {
  count: number
  increaseCount: () => void
  decreaseCount: () => void
};

const GlobalContext = createContext<TGlobalState>(null!);


export const GlobalStateProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0)

  const increaseCount = () => {
    setCount((val) => val + 1)
  }
  const decreaseCount = () => {
    setCount((val) => val === 0 ? 0 : val - 1)
  }

  return (
    <GlobalContext.Provider
      value={{
        count,
        increaseCount,
        decreaseCount
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalStateProvider');
  }
  return context;
};
