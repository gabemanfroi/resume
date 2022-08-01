import { useContext } from 'react';
import { ResumeContext } from '../../../contexts/ResumeContext';
import { Container } from './style';

const Portfolio = () => {
  const { currentPersonContent } = useContext(ResumeContext);
  const { projects } = currentPersonContent.portfolio;

  return (
    <Container>
      <h3>
        My Projects
      </h3>
      <div className='projects-container'>
        {projects.length > 0 && projects.map(project => (
          <div key={project.id} className='project-item-container'>

            <a href={project.url} target='_blank' rel='noreferrer'>
              <div className='project-item'
                   style={{ background: `url(${project.image})`, backgroundSize: 'cover' }}>
                {project.title}

              </div>
            </a>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Portfolio;
