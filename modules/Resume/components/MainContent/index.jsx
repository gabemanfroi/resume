import { Container, Divider, HeroBanner, HeroContent } from './style';
import { useEffect, useState } from 'react';

const MainContent = () => {
  const [iteration, setIteration] = useState(0);
  const texts = [
    'web applications.',
    'web APIs.',
    'automation tools.',
  ];

  const projects = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15',
  ];
  const [textBeingRotated, setTextBeingRotated] = useState('');
  const timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };


  useEffect(async () => {
    let strIterated = '';
    for (const char of texts[iteration]) {
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

    if (!texts[iteration + 1]) {
      setIteration(0);

    } else {

      setIteration(iteration + 1);
    }

  }, [texts, iteration]);

  return (
    <Container>
      <div className='container-background' />
      <Divider />
      <HeroBanner>
        <div className='overlay'>
          <h1>
            <span>Hi,</span>
            <br />
            <span>
            I am Gabriel!
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
      </HeroBanner>
      <HeroContent>
        <h3>
          My Projects
        </h3>
        <div className='projects-container'>
          {projects.length && projects.map(project => (
            <div key={project} className='project-item-container'>
              <div className='project-item'>
                {project}
              </div>
            </div>
          ))}
        </div>
      </HeroContent>
    </Container>
  );


};


export default MainContent;