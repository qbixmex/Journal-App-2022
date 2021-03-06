import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startCreatingUserWithEmailAndPassword } from '../../store/auth';

const initialState = {
  displayName: '',
  email: '',
  password: ''
};

const formValidations = {
  displayName: [
    (value) => value.length >= 3,
    'Full Name must be greater than 3 characters !'
  ],
  email: [
    (value) => value.includes('@'),
    'Email must have a @ character !'
  ],
  password: [
    (value) => value.length >= 8,
    'Password must be greater than 8 characters !'
  ],
};

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status] );

  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm( initialState, formValidations );

  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true);
    if ( !isFormValid ) return;
    dispatch( startCreatingUserWithEmailAndPassword(formState) );
  };

  return (
    <AuthLayout title="Register">
      <form id="register-form" onSubmit={ onSubmit }>
        <Grid container>

          <Grid item xs={ 12 } mb={ 2 }>
            <TextField
              id="display-name"
              name="displayName"
              label="Full Name"
              type="text"
              placeholder="Write your full name"
              fullWidth
              value={ displayName }
              onChange={ onInputChange }
              autoComplete='off'
              error={ !!displayNameValid && formSubmitted }
              helperText={ displayNameValid && formSubmitted && displayNameValid }
            />
          </Grid>

          <Grid item xs={ 12 } mb={ 2 }>
            <TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              placeholder="Write your email"
              fullWidth
              value={ email }
              onChange={ onInputChange }
              autoComplete='off'
              error={ !!emailValid && formSubmitted }
              helperText={ emailValid && formSubmitted && emailValid }
            />
          </Grid>

          <Grid item xs={ 12 } mb={ 2 }>
            <TextField
              id='password'
              name="password"
              label="Password"
              type="password"
              placeholder="Write your password"
              fullWidth
              value={ password }
              onChange={ onInputChange }
              autoComplete='off'
              error={ !!passwordValid && formSubmitted }
              helperText={ passwordValid && formSubmitted && passwordValid }
            />

          </Grid>

          <Grid container spacing={ 2 } sx={{ mb: 2 }}>

            <Grid item xs={ 12 } display={ !!errorMessage ? '' : 'none' }>
              <Alert severity='error'>{ errorMessage }</Alert>
            </Grid>

            <Grid item xs={ 12 }>
              <Button
                id='register-button'
                disabled={ isCheckingAuthentication }
                type='submit'
                variant='contained'
                fullWidth
              >Register</Button>
            </Grid>

          </Grid>

          <Grid container direction="row" justifyContent='end'>
            <Typography mr={ 1 }>already registered ?</Typography>
            <Link component={ RouterLink } color='inherit' to="/auth/login">
              Login
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  );
};
