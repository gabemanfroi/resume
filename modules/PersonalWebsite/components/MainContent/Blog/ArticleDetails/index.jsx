import { useContext } from 'react';
import { BlogContext } from '../../../../contexts/BlogContext';

const ArticleDetails = () => {
  const { selectedArticle } = useContext(BlogContext);
  return <h1>{selectedArticle.title}</h1>;

};

export default ArticleDetails;