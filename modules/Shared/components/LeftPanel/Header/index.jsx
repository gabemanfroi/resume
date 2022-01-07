import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';

import { WebsiteContentContext } from 'modules/PersonalWebsite/contexts/WebsiteContentContext';
import { ScreenSizeContext } from 'modules/Shared/contexts/ScreenSizeContext';
import { LeftPanelContext } from 'modules/Shared/contexts/LeftPanelContext';

import { AvatarContainer, Container } from './style';

const Header = () => {
  const { createdBy } = useContext(WebsiteContentContext).currentPersonContent;
  const { screenSize } = useContext(ScreenSizeContext);
  const { setIsActive } = useContext(LeftPanelContext);
  return (
    <Container>
      <AvatarContainer createdBy={createdBy} />
      <span>{createdBy.firstName} {createdBy.lastName}</span>
      <span>{createdBy.professionalTitle}</span>
      {screenSize < 1440 &&
        (<button onClick={() => setIsActive(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </button>)
      }
    </Container>
  );

};

export default Header;