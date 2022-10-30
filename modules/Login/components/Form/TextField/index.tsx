import { StyledTextField } from 'modules/Login/components/Form/TextField/style';
import { colors } from 'modules/Shared/theme/colors';
import { TextFieldProps } from '@mui/material';

const LoginTextField = ({ ...props }: TextFieldProps) => {
  return (
    <StyledTextField
      InputLabelProps={{ style: { color: colors.white } }}
      {...props}
    />
  );
};

export default LoginTextField;
