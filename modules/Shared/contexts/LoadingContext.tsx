import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';
import LoadingPage from '../components/LoadingPage';
import { useIsFetching } from '@tanstack/react-query';

interface LoadingContextInterface {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const loadingContextInitialValues: LoadingContextInterface = {
  loading: false,
  setLoading: () => {},
};

const LoadingContext = createContext<LoadingContextInterface>(
  loadingContextInitialValues,
);

interface LoadingProviderInterface {
  children: React.ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderInterface> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false);
  const isFetching = useIsFetching();

  const isLoading = useMemo(
    () => loading || !!isFetching,
    [loading, isFetching],
  );

  const value = useMemo(() => ({ loading, setLoading }), [loading]);

  return (
    <LoadingContext.Provider value={value}>
      {isLoading && <LoadingPage />}
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
