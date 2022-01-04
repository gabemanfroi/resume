import { createContext, useState } from 'react';

export const BlogContext = createContext({});

export const BlogProvider = ({ children }) => {
  const [selectedArticle, setSelectedArticle] = useState(null);


  return (
    <BlogContext.Provider value={{
      selectedArticle,
      setSelectedArticle,
    }}>
      {children}
    </BlogContext.Provider>
  );
};
