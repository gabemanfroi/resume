import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { AvatarContainer, Container } from './style';
import { useContext } from 'react';
import { WebsiteContentContext } from '../../../contexts/WebsiteContentContext';
import { ScreenSizeContext } from '../../../../Shared/contexts/ScreenSizeContext';
import { LeftPanelContext } from '../../../../Shared/contexts/LeftPanelContext';

const Header = () => {
  const { createdBy } = useContext(WebsiteContentContext).currentPersonContent;
  const { screenSize } = useContext(ScreenSizeContext);
  const { setIsActive } = useContext(LeftPanelContext);
  return (
    <Container>
      <AvatarContainer createdBy={createdBy} />
      <span>{createdBy.firstName} {createdBy.lastName}</span>
      <span>{createdBy.professionalTitle}</span>
      {screenSize < 992 &&
        (<button onClick={() => setIsActive(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </button>)
      }
    </Container>
  );

};

export default Header;