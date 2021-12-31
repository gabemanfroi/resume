import SkillSection from '../SkillSection';
import { Container } from './style';
import { useContext } from 'react';
import { WebsiteContentContext } from '../../../contexts/WebsiteContentContext';

const Coding = () => {

  const { programmingLanguages } = useContext(WebsiteContentContext).currentPersonContent.resume;


  return (
    <Container>
      <SkillSection skills={programmingLanguages} title={'Coding'} />
    </Container>
  );
};

export default Coding;