import { Container } from './style';
import { useContext } from 'react';
import { ResumeContext } from '../../../../contexts/ResumeContext';
import ArticleListItem from './ArticleListItem';

const ArticlesList = () => {
  const { currentPersonContent } = useContext(ResumeContext);
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
