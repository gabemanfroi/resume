import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

interface BlogContextInterface {
  selectedArticle: null | any;
  setSelectedArticle: Dispatch<SetStateAction<null | any>>;
}

const BlogContextInitialValues: BlogContextInterface = {
  selectedArticle: null,
  setSelectedArticle: () => {
  },
};

const BlogContext = createContext<BlogContextInterface>(BlogContextInitialValues);

interface BlogProviderInterface {
  children: React.ReactNode;
}

export const BlogProvider: React.FC<BlogProviderInterface> = ({ children }) => {
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

export const useBlog = () => useContext(BlogContext)
