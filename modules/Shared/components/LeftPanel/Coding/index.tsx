import { useResume } from 'modules/Resume/contexts/ResumeContext';

import { Container } from './style';
import { IconButton, Stack, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { colors } from 'modules/Shared/theme/colors';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import Form from 'modules/Shared/components/LeftPanel/Coding/Form';
import Skill from 'modules/Shared/components/LeftPanel/Skill';
import { useEditMode } from 'modules/Shared/hooks';
import { useState } from 'react';
import { ISkill } from 'modules/Shared/interfaces/ISkill';
import useResumeMutation from 'modules/Resume/hooks/useResumeMutation';

const Coding = () => {
  const { resume } = useResume();
  const { isEditMode, setIsEditMode } = useEditMode();
  const [createCodingMode, setCreateCodingMode] = useState(false);
  const [skillBeingCreated, setSkillBeingCreated] = useState<ISkill | null>(
    null,
  );

  const { updateResumeMutate } = useResumeMutation();

  const onCreateLanguageButtonClick = () => {
    setCreateCodingMode(true);
    setSkillBeingCreated({
      name: '',
      proficiency: 0,
      categoryName: 'Programming Languages',
    });
  };

  const onConfirmLanguageButtonClick = async () => {
    if (!resume || !skillBeingCreated) return;
    await updateResumeMutate({
      ...resume,
      skills: [...resume.skills, { ...skillBeingCreated }],
    });
    setCreateCodingMode(false);
    setSkillBeingCreated(null);
  };

  if (!resume) return <></>;

  const codingSkills = resume.skills.filter(
    (skill) => skill.categoryName === 'Programming Languages',
  );

  return (
    <Container>
      <Stack
        sx={{ marginBottom: 1 }}
        flexDirection="row"
        justifyContent={'space-between'}
      >
        <Typography variant={'h5'}>Coding</Typography>
        {isEditMode && !createCodingMode && (
          <IconButton onClick={onCreateLanguageButtonClick} size={'small'}>
            <FontAwesomeIcon icon={faPlus} size={'sm'} color={colors.gray} />
          </IconButton>
        )}
        {isEditMode && createCodingMode && (
          <IconButton onClick={onConfirmLanguageButtonClick} size={'small'}>
            <FontAwesomeIcon icon={faCheck} size={'sm'} color={colors.gray} />
          </IconButton>
        )}
      </Stack>
      {isEditMode && createCodingMode && (
        <Form
          skillBeingCreated={skillBeingCreated}
          setSkillBeingCreated={setSkillBeingCreated}
        />
      )}
      {codingSkills.length > 0 &&
        codingSkills.map((skill) => (
          <Skill
            type="linear"
            name={skill.name}
            key={skill.id}
            proficiency={skill.proficiency}
          />
        ))}
    </Container>
  );
};

export default Coding;
