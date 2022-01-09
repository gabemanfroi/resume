import { useContext } from 'react';

import { LeftPanelContext } from 'modules/Shared/contexts/LeftPanelContext';
import { ScreenSizeContext } from 'modules/Shared/contexts/ScreenSizeContext';

import Coding from './Coding';
import Header from './Header';
import GeneralInfo from './GeneralInfo';
import Languages from './Languages';
import OtherSkills from './OtherSkills';

import { Container, Content } from './style';
import { WebsiteContentContext } from '../../../PersonalWebsite/contexts/WebsiteContentContext';
import Footer from './Footer';

const LeftPanel = () => {
  const { isActive } = useContext(LeftPanelContext);
  const { screenSize } = useContext(ScreenSizeContext);
  const { currentPersonContent } = useContext(WebsiteContentContext);
  const { customSkillCategories } = currentPersonContent.resume;
  const customSkillCategoriesToBeUsed = customSkillCategories.filter(c => c.useOnResume);


  return (
    <>
      {
        <Container isActive={isActive} screenSize={screenSize}>
          <Header />
          <Content>
            <GeneralInfo />
            <Languages />
            <Coding />
            <OtherSkills />
          </Content>
          <Footer />
        </Container>
      }
    </>
  );

};

export default LeftPanel;