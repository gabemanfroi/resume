import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { animated, Spring } from 'react-spring';

import { ResumeContainer } from '/modules/Resume/style';
import { MainContent } from '/modules/Resume/components';

import { useResume } from '/modules/Resume/contexts/ResumeContext';
import Sidebar from '/modules/Resume/components/Sidebar';
import { useLoading } from '/modules/Shared/contexts/LoadingContext';
import { useScreenSize } from 'modules/Shared/contexts/ScreenSizeContext';
import AppBar from 'modules/Shared/components/AppBar';
import LeftPanel from 'modules/Shared/components/LeftPanel';


const Resume = () => {
  const { personName } = useRouter().query;
  const { screenSize } = useScreenSize();

  const { setCurrentPersonName, currentPersonContent } = useResume();
  const { isLoading } = useLoading();

  useEffect(() => {
    if (!Array.isArray(personName)) setCurrentPersonName(personName);
  }, [personName, setCurrentPersonName]);


  return (
    <>

      <ResumeContainer>
        {
          currentPersonContent && !isLoading &&
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ duration: 2000 }}>
            {styles =>
              <animated.div className='inner-container' style={styles}>
                <>
                  {screenSize <= 1024 && <AppBar />}
                </>
                <LeftPanel />
                <MainContent />
                <Sidebar />
              </animated.div>
            }
          </Spring>
        }
      </ResumeContainer>
    </>
  );

};

export default Resume;
