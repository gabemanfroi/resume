import { AvatarContainer } from 'modules/Shared/components/LeftPanel/Header/style';
import { Typography } from '@mui/material';
import { useResume } from 'modules/Resume/contexts';
import { colors } from 'modules/Shared/theme/colors';

const Presentation = () => {
  const { resume } = useResume();

  if (!resume) return <></>;
  return (
    <>
      <AvatarContainer user={resume.user} />
      <Typography component="span">
        {resume.user.firstName} {resume.user.lastName}
      </Typography>
      <Typography component="span" sx={{ color: `${colors.gray}!important` }}>
        {resume.user.role}
      </Typography>
    </>
  );
};

export default Presentation;
