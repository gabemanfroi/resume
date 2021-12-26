import { AvatarContainer, Container, Content, Header } from './style';
import Languages from './Languages';
import Coding from './Coding';
import GeneralInfo from './GeneralInfo';
import OtherSkills from './OtherSkills';
import Footer from './Footer';

const LeftPanel = () => {
  return (
    <Container>
      <Header>
        <AvatarContainer />
        <span>Gabriel Manfroi</span>
        <span>FullStack Developer</span>
      </Header>
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