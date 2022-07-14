import React, { createContext, Dispatch, SetStateAction, useContext, useMemo, useState } from 'react';
import LoadingPage from '../components/LoadingPage';

interface LoadingContextInterface {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const loadingContextInitialValues:LoadingContextInterface = {
  isLoading: false,
  setIsLoading: () => {}
}

const LoadingContext = createContext<LoadingContextInterface>(loadingContextInitialValues);

interface LoadingProviderInterface {
  children: React.ReactNode
}

export const LoadingProvider: React.FC<LoadingProviderInterface> = ({ children }) => {

  const [isLoading, setIsLoading] = useState(false);

  const value = useMemo(() => ({isLoading, setIsLoading}), [isLoading])

  return (
    <LoadingContext.Provider value={value}>
      {isLoading && <LoadingPage />}
      {children}
    </LoadingContext.Provider>
  );

}

export const useLoading = () => useContext(LoadingContext)
