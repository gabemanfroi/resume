import React, { createContext, Dispatch, SetStateAction, useContext, useMemo, useState } from 'react';

interface LeftPanelInterface {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

const leftPanelInitialValues: LeftPanelInterface = {
  isActive: false,
  setIsActive: () => {
  },
};

const LeftPanelContext = createContext<LeftPanelInterface>(leftPanelInitialValues);

interface LeftPanelProvider {
  children: React.ReactNode
}

export const LeftPanelProvider: React.FC<LeftPanelProvider> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const value = useMemo(() => ({
    isActive,
    setIsActive,
  }), [isActive]);

  return (
    <LeftPanelContext.Provider value={value}>
      {children}
    </LeftPanelContext.Provider>
  );
};

export const useLeftPanel = () => useContext(LeftPanelContext);
