import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useMemo, useState } from 'react';

import { useLoading } from 'modules/Shared/contexts/LoadingContext';

import { ResumeService } from 'modules/Resume/services';

interface WebsiteContentContextInterface {
  currentPersonName: string | null;
  setCurrentPersonName: Dispatch<SetStateAction<string | null>>;
  currentPersonContent: any;
}

const WebsiteContentContextInitialValues = {
  currentPersonName: '',
  setCurrentPersonName: () => {
  },
  currentPersonContent: undefined,
};

const ResumeContext = createContext<WebsiteContentContextInterface>(WebsiteContentContextInitialValues);

interface ResumeProps {
  children: React.ReactNode;
}

export const ResumeProvider: React.FC<ResumeProps> = ({ children }) => {
  const [currentPersonName, setCurrentPersonName] = useState<string | null>('');
  const [currentPersonContent, setCurrentPersonContent] = useState();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    if (!currentPersonName) return;
    setIsLoading(true);
    console.log(currentPersonName);

    ResumeService().getByUsername(currentPersonName).then((response) => {
      //@ts-ignore
      setCurrentPersonContent(response[0]);
      setIsLoading(false);
    });
  }, [currentPersonName]);

  const value = useMemo(() => ({
    currentPersonContent,
    currentPersonName,
    setCurrentPersonName,
  }), [currentPersonName, currentPersonContent]);

  return (
    <ResumeContext.Provider value={value}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => useContext(ResumeContext);
