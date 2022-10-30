import { animated, Spring } from 'react-spring';

import { ResumeContainer } from 'modules/Resume/style';
import { MainContent } from 'modules/Resume/components';

import { useResume } from 'modules/Resume/contexts/ResumeContext';
import Sidebar from 'modules/Resume/components/Sidebar';
import { useScreenSize } from 'modules/Shared/contexts/ScreenSizeContext';
import AppBar from 'modules/Shared/components/AppBar';
import LeftPanel from 'modules/Shared/components/LeftPanel';
import { useLoading } from 'modules/Shared/contexts';

const Resume = () => {
  const { screenSize } = useScreenSize();

  const { resume } = useResume();
  const { loading } = useLoading();

  return (
    <ResumeContainer>
      {resume && !loading && (
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ duration: 2000 }}
        >
          {(styles) => (
            <animated.div className="inner-container" style={styles}>
              <>{screenSize <= 1024 && <AppBar />}</>
              <LeftPanel />
              <MainContent />
              <Sidebar />
            </animated.div>
          )}
        </Spring>
      )}
    </ResumeContainer>
  );
};

export default Resume;
