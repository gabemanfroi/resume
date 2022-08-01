import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { useContext } from 'react';
import { SidebarContext } from '../../../../Shared/contexts/SidebarContext';
import { Container } from './style';

const ToggleButton = () => {
  const { isActive, setIsActive } = useContext(SidebarContext);

  return (
    <Container>
      <button onClick={() => setIsActive(!isActive)}>
        <FontAwesomeIcon icon={faBars} size='lg' color='#8C8CE' />
      </button>
    </Container>
  );
};

export default ToggleButton;