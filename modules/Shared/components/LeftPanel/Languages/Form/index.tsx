import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import { InputAdornment, TextField } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { colors } from 'modules/Shared/theme/colors';
import { ISkill } from 'modules/Shared/interfaces/ISkill';

interface FormProps {
  languageBeingCreated: ISkill | null;
  setLanguageBeingCreated: Dispatch<SetStateAction<ISkill | null>>;
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

const Form = ({ languageBeingCreated, setLanguageBeingCreated }: FormProps) => {
  if (!languageBeingCreated) return <></>;

  return (
    <li className="language">
      <CircularProgressbarWithChildren
        value={languageBeingCreated.proficiency}
        styles={buildStyles({
          strokeLinecap: 'butt',
        })}
      >
        <TextField
          sx={{ width: '44px' }}
          InputProps={inputProps}
          variant="standard"
          type={'text'}
          onChange={(e) => {
            setLanguageBeingCreated({
              ...languageBeingCreated,
              proficiency: Number(e.target.value),
            });
          }}
        />
      </CircularProgressbarWithChildren>
      <TextField
        variant="standard"
        onChange={(e) => {
          setLanguageBeingCreated({
            ...languageBeingCreated,
            name: e.target.value,
          });
        }}
      />
    </li>
  );
};

export default Form;
