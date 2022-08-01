import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from 'react';

import { ResumeContext } from 'modules/Resume/contexts/ResumeContext';

import { Container } from './style';

const Languages = () => {

  const { languages } = useContext(ResumeContext).currentPersonContent.resume;

  return (
    <Container>
      <h5>Languages</h5>
      <ul className='languages-list'>
        {languages.length > 0 && languages.map(language => (
          <li key={language.id} className='language'>
            <CircularProgressbar value={language.proficiency} text={`${language.proficiency}%`}
                                 styles={buildStyles({
                                   strokeLinecap: 'butt',
                                 })} />
            <span>{language.name}</span>
          </li>))}
      </ul>
    </Container>
  );
};

export default Languages;
