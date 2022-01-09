import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';

import { WebsiteContentContext } from '/modules/PersonalWebsite/contexts/WebsiteContentContext';

import { Container, OtherSkill } from './style';

const OtherSkills = () => {
  const { techSkills } = useContext(WebsiteContentContext).currentPersonContent.resume;

  return (
    <Container>
      <h5>Other Skills</h5>
      {
        techSkills.length && techSkills.map((skill, index) =>
          <OtherSkill
            key={index}>
            <FontAwesomeIcon icon={faCheck} size={'xs'} color='#3E98C7' />
            <h6>{skill.name}</h6>
          </OtherSkill>)
      }
    </Container>
  );

};

export default OtherSkills;