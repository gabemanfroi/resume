import { useContext } from 'react';

import { ResumeContext } from 'modules/Resume/contexts/ResumeContext';

import SkillSection from '../SkillSection';

import { Container } from './style';

const Coding = () => {

  const { programmingLanguages } = useContext(ResumeContext).currentPersonContent.resume;

  return (
    <Container>
      <SkillSection skills={programmingLanguages} title={'Coding'} />
    </Container>
  );
};

export default Coding;
