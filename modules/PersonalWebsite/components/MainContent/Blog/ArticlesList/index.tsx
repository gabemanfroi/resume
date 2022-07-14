import { Container } from './style';
import { useContext } from 'react';
import { PersonalWebsiteContext } from '../../../../contexts/PersonalWebsiteContext';
import ArticleListItem from './ArticleListItem';

const ArticlesList = () => {
  const { currentPersonContent } = useContext(PersonalWebsiteContext);
  const { articles } = currentPersonContent.blog;

  return (
    <Container>

      <h1>Blog</h1>
      <div className='articles-container'>
        {
          articles.map(article => (
            <ArticleListItem key={article.id} article={article} />
          ))
        }
      </div>
    </Container>
  );
};

export default ArticlesList;
