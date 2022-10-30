import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useDialog, useProjectCategoryQuery } from 'modules/Shared/hooks';
import { ChangeEvent, useState } from 'react';
import { IProject } from 'modules/Resume/interfaces/IProject';
import { colors } from 'modules/Shared/theme/colors';
import AxiosClient from 'modules/Shared/util/AxiosClient';

const CreateProjectDialog = () => {
  const { isOpen, setIsOpen, setSelectedModal, selectedModal } = useDialog();
  const { getAllProjectCategoriesData, getAllProjectCategoriesIsLoading } =
    useProjectCategoryQuery();
  const [imageToUpload, setImageToUpload] = useState('');

  const defaultProject = {
    title: '',
    imageUrl: 'assets/images/background_placeholder.jpg',
    url: '',
    categoryId: 0,
  };

  const [projectBeingCreated, setProjectBeingCreated] =
    useState<IProject>(defaultProject);

  const onClose = () => {
    setProjectBeingCreated(defaultProject);
    setSelectedModal('');
    setIsOpen(false);
  };

  const onProjectBackgroundImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    // @ts-ignore
    const [file] = e.target.files;
    setProjectBeingCreated({
      ...projectBeingCreated,
      imageUrl: URL.createObjectURL(file),
    });
    setImageToUpload(file);
  };

  const onSave = () => {
    const formData = new FormData();
    formData.append('userId', '1');
    formData.append('title', projectBeingCreated.title);
    formData.append('url', projectBeingCreated.url);
    formData.append('backgroundImage', imageToUpload);
    formData.append(
      'projectCategoryId',
      String(projectBeingCreated.categoryId),
    );
    AxiosClient.post('/projects', formData);
  };

  const onCancel = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>
        <Typography color={colors.white}>New Project</Typography>
      </DialogTitle>
      <DialogContent>
        <Stack gap={2}>
          <Autocomplete
            renderInput={(params) => <TextField {...params} label="Category" />}
            options={
              getAllProjectCategoriesData?.data
                ? getAllProjectCategoriesData.data.map((c) => ({
                    label: c.name,
                    id: c.id,
                  }))
                : []
            }
            loading={getAllProjectCategoriesIsLoading}
            onChange={(e, v) => {
              if (!v) return;
              setProjectBeingCreated({
                ...projectBeingCreated,
                categoryId: Number(v.id),
              });
            }}
          />
          <Stack gap={4} direction={'row'}>
            <TextField
              onChange={(e) => {
                setProjectBeingCreated({
                  ...projectBeingCreated,
                  title: e.target.value,
                });
              }}
              variant="standard"
              label="Título"
              defaultValue={projectBeingCreated.title}
              InputLabelProps={{
                sx: {
                  color: colors.white,
                },
              }}
            />
            <TextField
              variant="standard"
              label="URL"
              onChange={(e) =>
                setProjectBeingCreated({
                  ...projectBeingCreated,
                  url: e.target.value,
                })
              }
              defaultValue={projectBeingCreated.url}
              InputLabelProps={{
                sx: {
                  color: colors.white,
                },
              }}
            />
          </Stack>
          <Stack>
            <input type="file" onChange={onProjectBackgroundImageChange} />
            <Box
              component="img"
              alt="project background image"
              src={projectBeingCreated.imageUrl}
              sx={{ width: '100%', height: '250px' }}
            />
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button title="Cancelar" onClick={onCancel}>
          Cancelar
        </Button>
        <Button title="Salvar" onClick={onSave}>
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateProjectDialog;
