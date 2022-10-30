import { useResume } from 'modules/Resume/contexts';
import OtherSkill from 'modules/Shared/components/LeftPanel/OtherSkills/OtherSkill';
import { IconButton, Stack, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { colors } from 'modules/Shared/theme/colors';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { useEditMode } from 'modules/Shared/hooks';
import { useState } from 'react';

const OtherSkills = () => {
  const { resume } = useResume();
  const { isEditMode } = useEditMode();
  const [createSkillMode, setCreateSkillMode] = useState(false);

  if (!resume) return <></>;

  const onCreateSkillButtonClick = () => {
    setCreateSkillMode(true);
  };

  const onConfirmSkillButtonClick = () => {};

  const otherSkills = resume.skills.filter(
    (skill) => skill.categoryName === 'Other',
  );

  return (
    <Stack sx={{ marginTop: 2 }}>
      <Stack flexDirection="row" justifyContent="space-between">
        <Typography variant="h5">Other Skills</Typography>
        {isEditMode && !createSkillMode && (
          <IconButton onClick={onCreateSkillButtonClick} size={'small'}>
            <FontAwesomeIcon icon={faPlus} size={'sm'} color={colors.gray} />
          </IconButton>
        )}
        {isEditMode && createSkillMode && (
          <IconButton onClick={onConfirmSkillButtonClick} size={'small'}>
            <FontAwesomeIcon icon={faCheck} size={'sm'} color={colors.gray} />
          </IconButton>
        )}
      </Stack>
      {resume.skills.length > 0 &&
        otherSkills.map((skill) => <OtherSkill skill={skill} key={skill.id} />)}
    </Stack>
  );
};

export default OtherSkills;
