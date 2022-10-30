import {
  ProgressBar,
  SkillContainer,
} from 'modules/Shared/components/LeftPanel/Skill/LinearProgressBar/style';
import { ISkill } from 'modules/Shared/interfaces/ISkill';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { InputAdornment, Stack, TextField } from '@mui/material';
import { colors } from 'modules/Shared/theme/colors';

interface FormProps {
  skillBeingCreated: ISkill | null;
  setSkillBeingCreated: Dispatch<SetStateAction<ISkill | null>>;
}

const inputProps = {
  style: {
    fontSize: '14px',
  },
  endAdornment: (
    <InputAdornment
      sx={{
        '&>p': {
          color: `${colors.white}`,
        },
      }}
      position={'end'}
    >
      %
    </InputAdornment>
  ),
};

const Form = ({ skillBeingCreated, setSkillBeingCreated }: FormProps) => {
  const onNameChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    if (!skillBeingCreated) return;
    setSkillBeingCreated({
      ...skillBeingCreated,
      name: e.target.value,
    });
  };

  const onProficiencyChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    if (!skillBeingCreated) return;
    setSkillBeingCreated({
      ...skillBeingCreated,
      proficiency: parseInt(e.target.value),
    });
  };

  if (!skillBeingCreated) return <></>;

  return (
    <SkillContainer>
      <Stack flexDirection="row" gap={3} className="texts-container">
        <TextField
          sx={{ flex: 0.8 }}
          variant="standard"
          value={skillBeingCreated.name}
          onChange={onNameChange}
        />
        <TextField
          sx={{
            flex: 0.2,
          }}
          variant="standard"
          type={'text'}
          value={skillBeingCreated.proficiency}
          onChange={onProficiencyChange}
          InputProps={inputProps}
        />
      </Stack>
      <ProgressBar
        style={{ marginTop: '12px' }}
        height={3}
        proficiency={skillBeingCreated.proficiency}
      />
    </SkillContainer>
  );
};

export default Form;
