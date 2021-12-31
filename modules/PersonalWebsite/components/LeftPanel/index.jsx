import { Container, Content } from './style';
import Languages from './Languages';
import Coding from './Coding';
import GeneralInfo from './GeneralInfo';
import OtherSkills from './OtherSkills';
import Footer from './Footer';
import { useContext } from 'react';
import { LeftPanelContext } from '../../../Shared/contexts/LeftPanelContext';
import { ScreenSizeContext } from '../../../Shared/contexts/ScreenSizeContext';
import Header from './Header';

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