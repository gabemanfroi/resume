import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { useLoading } from 'modules/Shared/contexts/LoadingContext';
import { IResume } from 'modules/Resume/interfaces/IResume';
import { useResumeQuery } from 'modules/Resume/hooks';

interface WebsiteContentContextInterface {
  resume: IResume | null;
  setResume: Dispatch<SetStateAction<IResume | null>>;
}

const WebsiteContentContextInitialValues = {
  resume: null,
  setResume: () => {},
};

const ResumeContext = createContext<WebsiteContentContextInterface>(
  WebsiteContentContextInitialValues,
);

interface ResumeProps {
  children: React.ReactNode;
}

export const ResumeProvider: React.FC<ResumeProps> = ({ children }) => {
  const [resume, setResume] = useState<IResume | null>(null);
  const { setLoading } = useLoading();

  const { findByUsernameIsLoading, findByUsernameData } = useResumeQuery();

  useEffect(() => {
    console.log('here');
    if (findByUsernameData) setResume(findByUsernameData.data);
  }, [findByUsernameData]);

  const value = useMemo(
    () => ({
      resume,
      setResume,
    }),
    [resume],
  );

  return (
    <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
  );
};

export const useResume = () => useContext(ResumeContext);
