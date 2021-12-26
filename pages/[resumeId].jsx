import { ResumeContainer } from '../modules/Resume/style';
import { LeftPanel } from '../modules/Resume/components';

const Resume = () => {

  return (
    <>
      <link
        href='https://fonts.googleapis.com/css2?family=Bungee&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
        rel='stylesheet' />
      <ResumeContainer>
        <LeftPanel />
      </ResumeContainer>
    </>
  );

};

export default Resume;