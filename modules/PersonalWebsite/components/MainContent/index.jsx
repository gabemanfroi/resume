import { Container, Divider, HeroContent } from './style';
import { useContext } from 'react';
import { SidebarContext } from '../../../Shared/contexts/SidebarContext';
import { ScreenSizeContext } from '../../../Shared/contexts/ScreenSizeContext';
import Portfolio from './Portfolio';
import Blog from './Blog';
import MyHistory from './MyHistory';
import HeroBanner from './HeroBanner';
import { WebsiteContentContext } from '../../contexts/WebsiteContentContext';


const MainContent = () => {
  const { isActive: isSidebarActive, currentPage } = useContext(SidebarContext);
  const { screenSize } = useContext(ScreenSizeContext);
  const { currentPersonContent } = useContext(WebsiteContentContext);
  const { backgroundImage } = currentPersonContent;

  const pagesMapper = {
    Portfolio: <Portfolio />,
    Blog: <Blog />,
    'My History': <MyHistory />,
  };

  return (
    <>
      {
        <Container backgroundImage={backgroundImage} isSidebarActive={isSidebarActive}>
          <div className='container-background' />
          {screenSize >= 992 && <Divider />}
          <HeroBanner />
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