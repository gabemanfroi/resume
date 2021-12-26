import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Container, OtherSkill } from './style';

const OtherSkills = () => {
  const otherSkills = [
    'Git, Docker, AWS',
    'REST, Sql, NoSql',
    'DDD',
    'Clean Code',

  ];

  return (
    <Container>
      <h5>Other Skills</h5>
      {
        otherSkills.length && otherSkills.map((skill, index) => <OtherSkill key={index}>
          <FontAwesomeIcon icon={faCheck} size={'xs'} color='#3E98C7' />
          <h6>{skill}</h6>
        </OtherSkill>)
      }

    </Container>
  );

};

export default OtherSkills;