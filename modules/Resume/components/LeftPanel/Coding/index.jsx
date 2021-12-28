import SkillSection from '../SkillSection';
import { Container } from './style';

const Coding = ({ programmingLanguages }) => {

  return (
    <Container>
      <SkillSection skills={programmingLanguages} title={'Coding'} />
    </Container>
  );
};

export default Coding;