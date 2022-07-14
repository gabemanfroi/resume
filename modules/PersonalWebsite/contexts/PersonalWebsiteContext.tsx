import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useMemo, useState } from 'react';

import { useLoading } from 'modules/Shared/contexts/LoadingContext';

import { PersonalWebsiteAPI } from 'modules/PersonalWebsite/api';

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

const PersonalWebsiteContext = createContext<WebsiteContentContextInterface>(WebsiteContentContextInitialValues);

interface PersonalWebsiteProps {
  children: React.ReactNode;
}

export const PersonalWebsiteProvider: React.FC<PersonalWebsiteProps> = ({ children }) => {
  const [currentPersonName, setCurrentPersonName] = useState<string | null>('');
  const [currentPersonContent, setCurrentPersonContent] = useState();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    if (!currentPersonName) return;
    setIsLoading(true);

    PersonalWebsiteAPI().getById(currentPersonName).then((response) => {
      // @ts-ignore
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
    <PersonalWebsiteContext.Provider value={value}>
      {children}
    </PersonalWebsiteContext.Provider>
  );
};

export const usePersonalWebsite = () => useContext(PersonalWebsiteContext)
