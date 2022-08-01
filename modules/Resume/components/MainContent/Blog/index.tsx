import ArticlesList from './ArticlesList';
import { useContext } from 'react';
import { BlogContext } from '../../../contexts/BlogContext';
import ArticleDetails from './ArticleDetails';

const Blog = () => {
  const { selectedArticle } = useContext(BlogContext);
  return (
    <>
      {selectedArticle && <ArticleDetails />}
      {!selectedArticle && <ArticlesList />}
    </>
  );
};

export default Blog;