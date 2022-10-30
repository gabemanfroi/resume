import { Container } from './style';
import { useResume } from 'modules/Resume/contexts';
import { IconButton, Stack, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { colors } from 'modules/Shared/theme/colors';
import CreateProjectDialog from 'modules/Shared/components/Dialog/CreateProjectDialog';
import { useDialog } from 'modules/Shared/hooks';
import DIALOGS from 'modules/Shared/constants/dialogs';

const Portfolio = () => {
  const { resume } = useResume();
  const { setIsOpen, setSelectedModal, selectedModal, isOpen } = useDialog();

  if (!resume) return <></>;

  const { projects } = resume;

  const onCreateProjectButtonClick = () => {
    setSelectedModal(DIALOGS.CREATE_NEW_PROJECT);
    setIsOpen(true);
  };

  const isCreateProjectDialogOpen = () => {
    return isOpen && selectedModal === DIALOGS.CREATE_NEW_PROJECT;
  };

  return (
    <>
      <Container>
        <Stack direction="row" justifyContent="space-between">
          <Typography
            variant="h3"
            sx={{ fontSize: 24, marginBottom: '0!important' }}
          >
            My Projects
          </Typography>
          <IconButton onClick={onCreateProjectButtonClick} size={'small'}>
            <FontAwesomeIcon icon={faPlus} size={'sm'} color={colors.gray} />
          </IconButton>
        </Stack>
        <div className="projects-container">
          {projects?.length > 0 &&
            projects.map((project) => (
              <div key={project.id} className="project-item-container">
                <a href={project.url} target="_blank" rel="noreferrer">
                  <Stack
                    className="project-item"
                    sx={{
                      background: `url(${
                        project.imageUrl
                          ? project.imageUrl
                          : '/assets/images/background_placeholder.jpg'
                      })`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    {project.title}
                  </Stack>
                </a>
              </div>
            ))}
        </div>
      </Container>
      {isCreateProjectDialogOpen() && <CreateProjectDialog />}
    </>
  );
};

export default Portfolio;
