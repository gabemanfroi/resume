import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { useLeftPanel, useScreenSize } from 'modules/Shared/contexts';
import { useEditMode } from 'modules/Shared/hooks';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { useResume } from 'modules/Resume/contexts';
import useResumeMutation from 'modules/Resume/hooks/useResumeMutation';

const ButtonGroup = () => {
  const { screenSize } = useScreenSize();
  const { setIsActive } = useLeftPanel();
  const { setIsEditMode, isEditMode } = useEditMode();
  const { resume } = useResume();
  const { updateResumeMutate } = useResumeMutation();

  if (!resume) return <></>;

  const onClick = async () => {
    if (!resume) return;
    await updateResumeMutate({ ...resume });
    setIsEditMode(false);
  };

  return (
    <>
      {screenSize < 1440 && (
        <button onClick={() => setIsActive(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      )}
      {!isEditMode && (
        <button
          style={{ position: 'absolute', left: '16px', top: '16px' }}
          onClick={() => {
            setIsEditMode(true);
          }}
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
      )}
      {isEditMode && (
        <button
          style={{ position: 'absolute', left: '16px', top: '16px' }}
          onClick={onClick}
          type={'submit'}
        >
          <FontAwesomeIcon icon={faCheck} />
        </button>
      )}
    </>
  );
};

export default ButtonGroup;
