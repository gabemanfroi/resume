import { Container } from './style';
import Form from 'modules/Shared/components/LeftPanel/Header/Form';
import { useEditMode } from 'modules/Shared/hooks';
import ButtonGroup from 'modules/Shared/components/LeftPanel/Header/ButtonGroup';
import Presentation from 'modules/Shared/components/LeftPanel/Header/Presentation';

const Header = () => {
  const { isEditMode } = useEditMode();

  return (
    <Container>
      {!isEditMode && <Presentation />}
      {isEditMode && <Form />}
      <ButtonGroup />
    </Container>
  );
};

export default Header;
