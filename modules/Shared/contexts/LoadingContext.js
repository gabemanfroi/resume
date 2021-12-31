import { createContext, useState } from 'react';
import LoadingPage from '../components/LoadingPage';

export const LoadingContext = createContext({});

export function LoadingProvider({ children }) {

  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && <LoadingPage />}
      {children}
    </LoadingContext.Provider>
  );

}
