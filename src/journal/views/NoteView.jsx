import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks";
import { useSelector } from "react-redux";
import { useMemo } from "react";

export const NoteView = () => {

  const { active: note } = useSelector( state => state.journal );

  const { title, body, imageUrls, onInputChange } = useForm({
    title: note.title,
    body: note.body,
    imageUrls: note.imageUrls
  });

  const dateString = useMemo(() => {
    const newDate = new Date( note.date );
    return newDate.toUTCString();
  }, [ note.date ]);

  return (
    <Grid container
      className='animate__animated animate__fadeIn animate__faster'
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ mb: 2 }}
    >
      <Grid item>
        <Typography
          fontSize={ '1.8rem' }
          fontWeight='light'
        >{ dateString }</Typography>
      </Grid>

      <Grid item>
        <Button color='primary' variant="outlined" sx={{ padding: 1 }}>
          <SaveOutlined sx={{ fontSize: 30 }} mr={ 2 } />
          Save
        </Button>
      </Grid>

      <Grid container mt='1.2rem'>

          <TextField
            name='title'
            type='text'
            variant='filled'
            placeholder='Type post title'
            label='Title'
            fullWidth
            sx={{ border: 'none', mb: 1 }}
            value={ title }
            onChange={ onInputChange }
          />

          <TextField
            name='body'
            type='text'
            variant='filled'
            placeholder='Type post content'
            fullWidth
            multiline
            minRows={ 5 }
            value={ body }
            onChange={ onInputChange }
          />

      </Grid>

      <ImageGallery />

    </Grid>
  );
};
