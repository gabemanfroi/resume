import 'react-circular-progressbar/dist/styles.css';

import { useResume } from 'modules/Resume/contexts/ResumeContext';

import { Container } from './style';
import Language from 'modules/Shared/components/LeftPanel/Languages/Language';
import { IconButton, Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { colors } from 'modules/Shared/theme/colors';
import { useEditMode } from 'modules/Shared/hooks';
import { useState } from 'react';
import Form from 'modules/Shared/components/LeftPanel/Languages/Form';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { ISkill } from 'modules/Shared/interfaces/ISkill';
import useResumeMutation from 'modules/Resume/hooks/useResumeMutation';

const Languages = () => {
  const { resume } = useResume();
  const { isEditMode } = useEditMode();
  const [languageBeingCreated, setLanguageBeingCreated] =
    useState<ISkill | null>(null);

  const { updateResumeMutate } = useResumeMutation();

  const [createLanguageMode, setCreateLanguageMode] = useState(false);

  const onCreateLanguageButtonClick = () => {
    setCreateLanguageMode(true);
    setLanguageBeingCreated({
      name: '',
      categoryName: 'Languages',
      proficiency: 0,
    });
  };

  const onConfirmLanguageButtonClick = async () => {
    if (!resume || !languageBeingCreated) return;
    await updateResumeMutate({
      ...resume,
      skills: [...resume.skills, { ...languageBeingCreated }],
    });
    setLanguageBeingCreated(null);
    setCreateLanguageMode(false);
  };

  if (!resume) return <></>;

  return (
    <Container sx={{ paddingTop: 2 }}>
      <Stack flexDirection="row" justifyContent="space-between">
        <h5>Languages</h5>
        {isEditMode && !createLanguageMode && (
          <IconButton onClick={onCreateLanguageButtonClick} size={'small'}>
            <FontAwesomeIcon icon={faPlus} size={'sm'} color={colors.gray} />
          </IconButton>
        )}
        {isEditMode && createLanguageMode && (
          <IconButton onClick={onConfirmLanguageButtonClick} size={'small'}>
            <FontAwesomeIcon icon={faCheck} size={'sm'} color={colors.gray} />
          </IconButton>
        )}
      </Stack>
      <ul className="languages-list">
        {resume.skills.length > 0 &&
          resume.skills
            .filter((skill) => skill.categoryName === 'Languages')
            .map((skill) => <Language skill={skill} key={skill.id} />)}
        {isEditMode && createLanguageMode && (
          <Form
            languageBeingCreated={languageBeingCreated}
            setLanguageBeingCreated={setLanguageBeingCreated}
          />
        )}
      </ul>
    </Container>
  );
};

export default Languages;
