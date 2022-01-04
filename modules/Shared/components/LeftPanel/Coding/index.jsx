import { useContext } from 'react';

import { WebsiteContentContext } from 'modules/PersonalWebsite/contexts/WebsiteContentContext';

import SkillSection from '../SkillSection';

import { Container } from './style';

const Coding = () => {

  const { programmingLanguages } = useContext(WebsiteContentContext).currentPersonContent.resume;

  return (
    <Container>
      <SkillSection skills={programmingLanguages} title={'Coding'} />
    </Container>
  );
};

export default Coding;