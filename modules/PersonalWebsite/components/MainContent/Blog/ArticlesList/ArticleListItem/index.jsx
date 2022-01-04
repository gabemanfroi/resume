import { Container, Tag } from './style';
import { useContext } from 'react';
import { BlogContext } from '../../../../../contexts/BlogContext';

const ArticleListItem = ({ article }) => {
  const { setSelectedArticle } = useContext(BlogContext);

  return (
    <Container key={article.id}>
      <image alt={`imagem de fundo do artigo ${article.title}`} src={article.image} />
      <div className='article-content'>
        <div className='tags'>
          {article.subjects.map(subject => <Tag key={subject.id} tagColor={subject.tagColor}
                                                className='tag'>{subject.title} </Tag>)}
        </div>
        <div className='general'>
                  <span>
                    {new Date(article.createdAt).toLocaleDateString('pt-BR')}
                  </span>
        </div>
        <h5 className='title'>
          {article.title}
        </h5>
        <div className='bottom-container'>
          <p className='description'>
            {article.content}
          </p>
          <span className='read-more' onClick={() => {
            console.log(article);
            setSelectedArticle(article);
          }}>
                  Read More ${'>'}
          </span>
        </div>
      </div>
    </Container>
  );
};

export default ArticleListItem;