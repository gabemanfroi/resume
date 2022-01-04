import { Container } from './style';
import { useContext } from 'react';
import { WebsiteContentContext } from '../../../../contexts/WebsiteContentContext';
import ArticleListItem from './ArticleListItem';

const ArticlesList = () => {
  const { currentPersonContent } = useContext(WebsiteContentContext);
  const { articles } = currentPersonContent.blog;

  return (
    <Container>
      <h1>Blog</h1>
      <div className='articles-container'>
        {
          articles.map((article, index) => (
            <ArticleListItem key={index} article={article} />
          ))
        }
      </div>
    </Container>
  );
};

export default ArticlesList;