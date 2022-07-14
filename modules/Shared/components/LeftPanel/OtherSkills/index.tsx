import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';

import { PersonalWebsiteContext } from '/modules/PersonalWebsite/contexts/PersonalWebsiteContext';

import { Container, OtherSkill } from './style';

const OtherSkills = () => {
  const { techSkills } = useContext(PersonalWebsiteContext).currentPersonContent.resume;

  return (
    <Container>
      <h5>Other Skills</h5>
      {
        techSkills.length > 0 && techSkills.map(skill =>
          <OtherSkill
            key={skill.id}>
            <FontAwesomeIcon icon={faCheck} size={'xs'} color='#3E98C7' />
            <h6>{skill.name}</h6>
          </OtherSkill>)
      }
    </Container>
  );

};

export default OtherSkills;
