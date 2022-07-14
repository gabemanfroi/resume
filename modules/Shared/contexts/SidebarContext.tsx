import React, { createContext, Dispatch, SetStateAction, useContext, useMemo, useState } from 'react';

interface SidebarContextInterface{
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  currentPage: string;
  setCurrentPage: Dispatch<SetStateAction<string>>;
  pages: string[];
}

const sidebarContextInterface: SidebarContextInterface = {
  isActive: false,
  setIsActive: () => {},
  currentPage: 'Portfolio',
  setCurrentPage: () => {},
  pages: ['Portfolio', 'My History', 'Blog']
}

export const SidebarContext = createContext<SidebarContextInterface>(sidebarContextInterface);

interface SidebarProviderInterface {
  children: React.ReactNode
}

export const SidebarProvider: React.FC<SidebarProviderInterface> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [currentPage, setCurrentPage] = useState('Portfolio');

  const pages = ['Portfolio', 'My History', 'Blog'];

  const value = useMemo(() => ({ isActive, setIsActive, currentPage, setCurrentPage, pages }), [isActive, currentPage]);

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext)
