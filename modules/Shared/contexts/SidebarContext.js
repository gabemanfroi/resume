import { createContext, useState } from 'react';

export const SidebarContext = createContext({});

export const SidebarProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [currentPage, setCurrentPage] = useState('Portfolio');

  const pages = [
    'Portfolio', 'My History', 'Blog'
  ]


  return (
    <SidebarContext.Provider value={{
      isActive,
      setIsActive,
      currentPage,
      setCurrentPage,
      pages
    }}>
      {children}
    </SidebarContext.Provider>
  );
};
