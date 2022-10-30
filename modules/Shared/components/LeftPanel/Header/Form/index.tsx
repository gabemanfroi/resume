import { Button, Stack, TextField } from '@mui/material';
import { useResume } from 'modules/Resume/contexts';
import { ChangeEvent } from 'react';
import { AvatarContainer } from 'modules/Shared/components/LeftPanel/Header/style';
import { useEditMode } from 'modules/Shared/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { colors } from 'modules/Shared/theme/colors';
import AxiosClient from 'modules/Shared/util/AxiosClient';

const Form = () => {
  const { resume, setResume } = useResume();
  const { isEditMode } = useEditMode();

  if (!resume) return <></>;

  const onLastNameChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    if (!resume) return;
    setResume({
      ...resume,
      user: { ...resume.user, lastName: e.target.value },
    });
  };

  const onFirstNameChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    if (!resume) return;
    setResume({
      ...resume,
      user: { ...resume.user, firstName: e.target.value },
    });
  };

  const onProfilePictureChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    // @ts-ignore
    const [file] = e.target.files;
    try {
      const formData = new FormData();
      formData.append('profilePicture', file);
      formData.append('username', resume.user.username);
      await AxiosClient.post('/users/upload/profilePicture', formData);
    } catch (e) {
      console.log(e);
    } finally {
      setResume({
        ...resume,
        user: {
          ...resume.user,
          profilePictureUrl: URL.createObjectURL(file),
        },
      });
    }
  };

  const onRoleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    if (!resume) return;
    setResume({
      ...resume,
      user: { ...resume.user, role: e.target.value },
    });
  };

  const inputLabelProps = {
    style: {
      color: colors.white,
    },
  };
  return (
    <>
      <AvatarContainer user={resume.user}>
        {isEditMode && (
          <Button
            size="medium"
            component={'label'}
            sx={{ position: 'absolute', top: 0, right: -24 }}
          >
            <FontAwesomeIcon icon={faEdit} color={colors.gray} />
            <input type="file" hidden onChange={onProfilePictureChange} />
          </Button>
        )}
      </AvatarContainer>
      <Stack flexDirection={'row'} gap={3} p={1}>
        <TextField
          required
          InputLabelProps={inputLabelProps}
          name={'firstName'}
          label="First Name"
          sx={{ color: 'primary' }}
          variant="standard"
          fullWidth={false}
          size="medium"
          value={resume.user.firstName}
          onChange={onFirstNameChange}
        />
        <TextField
          required
          InputLabelProps={inputLabelProps}
          label="Last Name"
          name="lastName"
          sx={{ color: 'primary' }}
          variant="standard"
          size="medium"
          value={resume.user.lastName}
          onChange={onLastNameChange}
        />
      </Stack>
      <Stack p={1}>
        <TextField
          InputLabelProps={inputLabelProps}
          label="Role"
          name="role"
          sx={{ color: 'primary' }}
          variant="standard"
          value={resume.user.role}
          onChange={onRoleChange}
        />
      </Stack>
    </>
  );
};
export default Form;
