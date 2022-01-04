import { createContext, useContext, useEffect, useState } from 'react';

import { LoadingContext } from '/modules/Shared/contexts/LoadingContext';

import PersonalWebsiteAPI from '../api/PersonalWebsiteAPI';

export const WebsiteContentContext = createContext({});

export const PersonalWebsiteProvider = ({ children }) => {
  const [currentPersonName, setCurrentPersonName] = useState();
  const [currentPersonContent, setCurrentPersonContent] = useState();
  const { setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    if (!currentPersonName) return;
    setIsLoading(true);

    PersonalWebsiteAPI.getById(currentPersonName).then(response => {
      setCurrentPersonContent(response[0]);
      setIsLoading(false);
    });

  }, [currentPersonName]);

  return (
    <WebsiteContentContext.Provider value={{
      currentPersonName,
      setCurrentPersonName,
      currentPersonContent,
    }}>
      {children}
    </WebsiteContentContext.Provider>
  );
};
