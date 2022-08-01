import { Container, Divider, HeroContent } from './style';
import { useContext } from 'react';
import { SidebarContext } from 'modules/Shared/contexts/SidebarContext';
import { ScreenSizeContext } from '../../../Shared/contexts/ScreenSizeContext';
import Portfolio from './Portfolio';
import HeroBanner from './HeroBanner';
import { ResumeContext } from '../../contexts/ResumeContext';
import Blog from './Blog';
import MyHistory from './MyHistory';
import { BlogProvider } from '../../contexts/BlogContext';


const MainContent = () => {
  const { isActive: isSidebarActive, currentPage } = useContext(SidebarContext);
  const { screenSize } = useContext(ScreenSizeContext);
  const { currentPersonContent } = useContext(ResumeContext);
  const { backgroundImage } = currentPersonContent;

  const pagesMapper = {
    Portfolio: <Portfolio />,
    Blog: (<BlogProvider><Blog /></BlogProvider>),
    'My History': <MyHistory />,
  };

  const getBanner = () => {
    if (currentPage === 'Portfolio') {
      if (screenSize >= 992) {
        return <>
          <Divider />
          <HeroBanner />
        </>;
      }
      return <HeroBanner />;
    }
  };

  return (
    <>
      {
        <Container backgroundImage={backgroundImage} isSidebarActive={isSidebarActive}>
          <div className='container-background' />
          {getBanner()}
          <HeroContent>
            {
              pagesMapper[currentPage]
            }
          </HeroContent>
        </Container>}
    </>
  );
};


export default MainContent;
