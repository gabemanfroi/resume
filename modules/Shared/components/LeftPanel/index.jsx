import { useContext } from 'react';

import { LeftPanelContext } from 'modules/Shared/contexts/LeftPanelContext';
import { ScreenSizeContext } from 'modules/Shared/contexts/ScreenSizeContext';

import Coding from './Coding';
import Footer from './Footer';
import Header from './Header';
import GeneralInfo from './GeneralInfo';
import Languages from './Languages';
import OtherSkills from './OtherSkills';

import { Container, Content } from './style';

const LeftPanel = () => {
  const { isActive } = useContext(LeftPanelContext);
  const { screenSize } = useContext(ScreenSizeContext);

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