import { Container } from './style';
import Skill from '../Skill';

const SkillSection = ({ title, skills }) => {

  return (
    <Container>
      <h5>{title}</h5>
      {skills.length &&
        skills.map((skill, index) => <Skill type='linear' name={skill.name} key={index}
                                            proficiency={skill.proficiency} />)}

    </Container>
  );
};

export default SkillSection;