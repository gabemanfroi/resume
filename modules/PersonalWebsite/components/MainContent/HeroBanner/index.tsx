import { Container } from './style';
import { useContext, useEffect, useState } from 'react';
import { PersonalWebsiteContext } from '../../../contexts/PersonalWebsiteContext';

const HeroBanner = () => {
  const { currentPersonContent } = useContext(PersonalWebsiteContext);
  const { backgroundImage } = currentPersonContent;

  const [carrouselTexts] = useState(currentPersonContent.carrouselItems);
  const [textBeingRotated, setTextBeingRotated] = useState('');
  const [iteration, setIteration] = useState(0);

  const timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };


  useEffect(() => {
    const startCarrousel = async () => {
      if (carrouselTexts.length) {
        let strIterated = '';
        for (const char of carrouselTexts[iteration].title) {
          strIterated = strIterated + char;
          setTextBeingRotated(strIterated);
          await timeout(100);
        }
        await timeout(2000);
        while (strIterated.length !== 0) {
          setTextBeingRotated(strIterated);
          strIterated = strIterated.slice(0, -1);
          await timeout(50);
        }
        if (!carrouselTexts[iteration + 1]) {
          setIteration(0);
        } else {
          setIteration(iteration + 1);
        }
      }
    };
    startCarrousel();
  }, [iteration, carrouselTexts]);

  return (
    <Container backgroundImage={backgroundImage}>
      <div className='overlay'>
        <h1>
          <span>Hi,</span>
          <br />
          <span>
            I am {currentPersonContent.createdBy.firstName}!
            </span>
          <br />
          <span>
            Welcome to my personal space.
            </span>
        </h1>
        <div className='transitioning-text'>
          {'<'}
          <span>code</span>
          {'> '}
          I build {textBeingRotated}
          {'| </'}
          <span>code</span>
          {'>'}
        </div>
      </div>
    </Container>
  );
};

export default HeroBanner;
