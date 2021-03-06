import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { animated, Spring } from 'react-spring';

import { PersonalWebsiteContainer } from '/modules/PersonalWebsite/style';
import { MainContent } from '/modules/PersonalWebsite/components';

import { usePersonalWebsite } from '/modules/PersonalWebsite/contexts/PersonalWebsiteContext';
import Sidebar from '/modules/PersonalWebsite/components/Sidebar';
import { useLoading } from '/modules/Shared/contexts/LoadingContext';
import { useScreenSize } from 'modules/Shared/contexts/ScreenSizeContext';
import AppBar from 'modules/Shared/components/AppBar';
import LeftPanel from 'modules/Shared/components/LeftPanel';


const PersonalWebsite = () => {
  const { personName } = useRouter().query;
  const { screenSize } =useScreenSize();

  const { setCurrentPersonName, currentPersonContent } = usePersonalWebsite();
  const { isLoading } = useLoading();

  useEffect(() => {
    if(!Array.isArray(personName)) setCurrentPersonName(personName);

  }, [personName, setCurrentPersonName]);


  return (
    <>
      <link
        href='https://fonts.googleapis.com/css2?family=Bungee&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
        rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap' rel='stylesheet' />
      <PersonalWebsiteContainer>
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
      </PersonalWebsiteContainer>
    </>
  );

};

export default PersonalWebsite;
