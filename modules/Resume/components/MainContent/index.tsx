import { Container, Divider, HeroContent } from './style';
import { useSidebar } from 'modules/Shared/contexts/SidebarContext';
import Portfolio from './Portfolio';
import HeroBanner from './HeroBanner';
import Blog from './Blog';
import MyHistory from './MyHistory';
import { BlogProvider, useResume } from 'modules/Resume/contexts';
import { useScreenSize } from 'modules/Shared/contexts';


const MainContent = () => {
  const { isActive: isSidebarActive, currentPage } = useSidebar();
  const { screenSize } = useScreenSize();
  const { resume } = useResume();

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
        <Container backgroundImage={''} isSidebarActive={isSidebarActive}>
          <div className='container-background' />
          {getBanner()}
          <HeroContent>
            {
              pagesMapper[currentPage as 'Portfolio' |
                'Blog' |
                'My History']
            }
          </HeroContent>
        </Container>}
    </>
  );
};


export default MainContent;
