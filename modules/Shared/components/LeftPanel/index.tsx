import { useLeftPanel, useScreenSize } from 'modules/Shared/contexts';

import Coding from './Coding';
import Footer from './Footer';
import GeneralInfo from './GeneralInfo';
import Header from './Header';
import Languages from './Languages';
import OtherSkills from './OtherSkills';

import { Container, Content } from './style';

const LeftPanel = () => {
  const { isActive } = useLeftPanel();
  const { screenSize } = useScreenSize();

  return (
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
  );

};

export default LeftPanel;
