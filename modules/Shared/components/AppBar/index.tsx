import { Container } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons/faEllipsisH';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

import { useSidebar } from 'modules/Shared/contexts/SidebarContext';
import { useLeftPanel } from 'modules/Shared/contexts';

const AppBar = () => {
  const { setIsActive: setLeftPanelIsActive, isActive: leftPanelIsActive } =
    useLeftPanel();
  const { setIsActive: setSidebarIsActive, isActive: sidebarIsActive } =
    useSidebar();

  return (
    <>
      {!leftPanelIsActive && !sidebarIsActive && (
        <Container>
          <button onClick={() => setLeftPanelIsActive(true)}>
            <FontAwesomeIcon icon={faEllipsisH} size="lg" />
          </button>
          <button onClick={() => setSidebarIsActive(true)}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </Container>
      )}
    </>
  );
};

export default AppBar;
