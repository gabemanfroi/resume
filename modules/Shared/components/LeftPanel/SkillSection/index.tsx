import Skill from '../Skill';

import { Container } from './style';

interface SkillSectionPropsInterface {
  title: string,
  skills: any[]
}

const SkillSection = ({ title, skills }: SkillSectionPropsInterface) => {

  return (
    <Container>
      <h5>{title}</h5>
      {skills.length > 0 &&
        skills.map(skill => <Skill type='linear' name={skill.name} key={skill.id}
                                   proficiency={parseInt(skill.proficiency)} />)}

    </Container>
  );
};

export default SkillSection;
