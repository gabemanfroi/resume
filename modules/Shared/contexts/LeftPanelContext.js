import { createContext, useState } from 'react';

export const LeftPanelContext = createContext({});

export const LeftPanelProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <LeftPanelContext.Provider value={{
      isActive,
      setIsActive,
    }}>
      {children}
    </LeftPanelContext.Provider>
  );
};
