import { AvatarContainer, Container, Content, Header } from './style';
import Languages from './Languages';
import Coding from './Coding';
import GeneralInfo from './GeneralInfo';
import OtherSkills from './OtherSkills';
import Footer from './Footer';
import { ResumeContext } from '../../contexts/ResumeContext';
import { useContext } from 'react';

const LeftPanel = () => {

  const { chosenResume } = useContext(ResumeContext);

  return (
    <>
      {chosenResume &&
        <Container>
          <Header>
            <AvatarContainer />
            <span>{chosenResume.user.firstName} {chosenResume.user.lastName}</span>
            <span>FullStack Developer</span>
          </Header>
          <Content>
            <GeneralInfo />
            <Languages languages={chosenResume.languages} />
            <Coding programmingLanguages={chosenResume.programmingLanguages} />
            <OtherSkills />
          </Content>
          <Footer />
        </Container>
      }
    </>
  );

};

export default LeftPanel;