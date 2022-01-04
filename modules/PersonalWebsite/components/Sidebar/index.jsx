import { useContext } from 'react';

import ToggleButton from './ToggleButton';
import { Container, NavContainer } from './style';
import { SidebarContext } from '../../../Shared/contexts/SidebarContext';
import { ScreenSizeContext } from '../../../Shared/contexts/ScreenSizeContext';
import { animated, useSpring } from 'react-spring';


const Sidebar = () => {
  const { isActive, setIsActive, setCurrentPage, currentPage, pages } = useContext(SidebarContext);
  const { screenSize } = useContext(ScreenSizeContext);

  const isCurrentPageActive = (page) => {
    return page === currentPage ? 'is-active' : '';
  };

  const getWidthSetting = () => {
    if (screenSize < 600) {
      return isActive ? '90%' : '0';
    }
    if (screenSize < 992) {
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
      {(isActive || screenSize >= 992) &&
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