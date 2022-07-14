import { useContext } from 'react';

import { PersonalWebsiteContext } from 'modules/PersonalWebsite/contexts/PersonalWebsiteContext';

import SkillSection from '../SkillSection';

import { Container } from './style';

const Coding = () => {

  const { programmingLanguages } = useContext(PersonalWebsiteContext).currentPersonContent.resume;

  return (
    <Container>
      <SkillSection skills={programmingLanguages} title={'Coding'} />
    </Container>
  );
};

export default Coding;
