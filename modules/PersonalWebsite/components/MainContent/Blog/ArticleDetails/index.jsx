import { useContext } from 'react';
import { Container } from './style';
import { BlogContext } from '../../../../contexts/BlogContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';

const ArticleDetails = () => {
  const { selectedArticle, setSelectedArticle } = useContext(BlogContext);

  return (
    <Container articleImage={selectedArticle.image}>
      <header className='article-header'>
        <div className='header-top'>
          <button onClick={() => {
            console.log('teste');
            return setSelectedArticle(null);
          }}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <h1>{selectedArticle.title}</h1>
        </div>
        <div>{selectedArticle.createdAt}</div>
      </header>
      <div className='article-image-container'>

      </div>
      <div className='article-content-container'>
        {selectedArticle.content}
      </div>
    </Container>
  );

};

export default ArticleDetails;