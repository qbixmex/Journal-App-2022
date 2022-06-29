import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import { useForm } from "../../hooks";
import { setActiveNote, startSaveNote, startUploadingFiles } from "../../store/journal";

export const NoteView = () => {

  const dispatch = useDispatch();

  const { active: note, messageSaved, isSaving } = useSelector( state => state.journal );

  const { title, body, date, imageUrls, onInputChange, formState } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date( date );
    return newDate.toUTCString();
  }, [ date ]);

  const fileInputReference = useRef();

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if ( messageSaved.length > 0 ) {
      Swal.fire('Updated Note', messageSaved, 'success');
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch( startSaveNote() );
  };

  const onFileInputChange = ({ target }) => {

    if ( target.files === 0 ) return;

    dispatch( startUploadingFiles( target.files ) );
    
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
        <Typography fontSize={ '1.8rem' } fontWeight='light'>{ dateString }</Typography>
      </Grid>

      <Grid item>
        <input
          ref={ fileInputReference }
          type="file"
          multiple
          onChange={ onFileInputChange }
          style={{ display: 'none' }}
        />

        <IconButton
          color='primary'
          disabled={ isSaving }
          onClick={ () => fileInputReference.current.click() }
        >
          <UploadOutlined />
        </IconButton>

        <Button
          color='primary'
          variant="text"
          sx={{ padding: 1 }}
          onClick={ onSaveNote }
          disabled={ isSaving }
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
