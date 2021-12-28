import { ResumeContainer } from '../modules/Resume/style';
import { LeftPanel, MainContent } from '../modules/Resume/components';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { ResumeContext } from '../modules/Resume/contexts/ResumeContext';

const Resume = () => {
  const { resumeId } = useRouter().query;

  const { setChosenResumeId } = useContext(ResumeContext);

  useEffect(() => {
    setChosenResumeId(resumeId);
  }, [resumeId, setChosenResumeId]);

  return (
    <>
      <link
        href='https://fonts.googleapis.com/css2?family=Bungee&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
        rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap' rel='stylesheet' />
      <ResumeContainer>
        <LeftPanel />
        <MainContent />
      </ResumeContainer>
    </>
  );

};

export default Resume;