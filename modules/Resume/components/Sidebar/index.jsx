import ToggleButton from './ToggleButton';
import { Container, NavContainer } from './style';
import { animated, useSpring } from 'react-spring';
import { useScreenSize, useSidebar } from 'modules/Shared/contexts';


const Sidebar = () => {
  const { isActive, setIsActive, setCurrentPage, currentPage, pages } = useSidebar();
  const { screenSize } = useScreenSize();

  const isCurrentPageActive = (page) => {
    return page === currentPage ? 'is-active' : '';
  };

  const getWidthSetting = () => {
    if (screenSize < 600) {
      return isActive ? '90%' : '0';
    }
    if (screenSize < 1440) {
      return isActive ? '40%' : '0';
    }
    return isActive ? '20%' : '7%';
  };

  const springProps = useSpring({
    width: getWidthSetting(),
    config: {
      duration: 200,
    },
  });

  const onMenuItemClick = (page) => {
    setCurrentPage(page);
    setIsActive(false);
  };

  return (
    <>
      {(isActive || screenSize >= 1440) &&
        <Container as={animated.div} screenSize={screenSize} isActive={isActive} style={springProps}>
          <ToggleButton />
          <div className='current-page-container'>
            <span>{currentPage}</span>
          </div>

          <NavContainer isActive={isActive}>
            <ul>
              {pages.map((page, index) => <li key={index}
                                              onClick={() => onMenuItemClick(page)}
                                              className={isCurrentPageActive(page)}>{page}</li>)}
            </ul>
          </NavContainer>
        </Container>

      }
    </>
  );
};

export default Sidebar;
