import Skill from '../Skill';

import { Container } from './style';

const SkillSection = ({ title, skills }) => {

  return (
    <Container>
      <h5>{title}</h5>
      {skills.length > 0 &&
        skills.map((skill, index) => <Skill type='linear' name={skill.name} key={index}
                                            proficiency={parseInt(skill.proficiency)} />)}

    </Container>
  );
};

export default SkillSection;