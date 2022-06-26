import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <Grid container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ mb: 2 }}
    >
      <Grid item>
        <Typography
          fontSize={ 39 }
          fontWeight='light'
        >August 28, 2030</Typography>
      </Grid>

      <Grid item>
        <Button color='primary' variant="outlined" sx={{ padding: 1 }}>
          <SaveOutlined sx={{ fontSize: 30 }} mr={ 2 } />
          Save
        </Button>
      </Grid>

      <Grid container mt='1.2rem'>

          <TextField
            type='text'
            variant='filled'
            placeholder='Type post title'
            label='Title'
            fullWidth
            sx={{ border: 'none', mb: 1 }}
          />

          <TextField
            type='text'
            variant='filled'
            placeholder='Type post content'
            fullWidth
            multiline
            minRows={ 5 }
          />

      </Grid>

      <ImageGallery />

    </Grid>
  );
};
