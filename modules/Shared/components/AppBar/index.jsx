import { Container } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons/faEllipsisH';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { useContext } from 'react';
import { LeftPanelContext } from '../../contexts/LeftPanelContext';
import { SidebarContext } from '../../contexts/SidebarContext';

const AppBar = () => {
  const { setIsActive: setLeftPanelIsActive, isActive: leftPanelIsActive } = useContext(LeftPanelContext);
  const { setIsActive: setSidebarIsActive, isActive: sidebarIsActive } = useContext(SidebarContext);


  return (
    <>{
      !leftPanelIsActive && !sidebarIsActive && (<Container>
        <button onClick={() => setLeftPanelIsActive(true)}>
          <FontAwesomeIcon icon={faEllipsisH} size='lg' />
        </button>
        <button onClick={() => setSidebarIsActive(true)}>
          <FontAwesomeIcon icon={faBars} size='lg' />
        </button>
      </Container>)
    }
    </>
  );
};

export default AppBar;