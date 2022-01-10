import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from 'react';

import { WebsiteContentContext } from 'modules/PersonalWebsite/contexts/WebsiteContentContext';

import { Container } from './style';

const Languages = () => {

  const { languages } = useContext(WebsiteContentContext).currentPersonContent.resume;

  return (
    <Container>
      <h5>Languages</h5>
      <ul className='languages-list'>
        {languages.length > 0 && languages.map(language => (
          <li key={language.id} className='language'>
            <CircularProgressbar value={l.proficiency} text={`${l.proficiency}%`}
                                 styles={buildStyles({
                                   strokeLinecap: 'butt',
                                 })} />
            <span>{l.name}</span>
          </li>))}
      </ul>
    </Container>
  );
};

export default Languages;