import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";

import { useForm } from "../../hooks";
import { setActiveNote, startSaveNote } from "../../store/journal";

export const NoteView = () => {

  const dispatch = useDispatch();

  const { active: note } = useSelector( state => state.journal );

  const { title, body, date, imageUrls, onInputChange, formState } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date( date );
    return newDate.toUTCString();
  }, [ date ]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  const onSaveNote = () => {
    dispatch( startSaveNote() );
  };

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
        <Button
          color='primary'
          variant="outlined"
          sx={{ padding: 1 }}
          onClick={ onSaveNote }
        >
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
