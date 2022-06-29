import { useState, useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import Google from "@mui/icons-material/Google";

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startLoginWithEmailAndPassword, startGoogleSignIn } from '../../store/auth';

const formData = { email: '', password: '' };

const formValidations = {
  email: [
    (value) => value.includes('@'),
    'Email must have a @ character !'
  ],
  password: [
    (value) => value.length >= 8,
    'Password must be greater than 8 characters !'
  ],
};

export const LoginPage = () => {

  const dispatch = useDispatch();

  const { status, errorMessage } = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status] );

  const {
    email, password, onInputChange,
    isFormValid, emailValid, passwordValid
  } = useForm( formData, formValidations );

  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if ( !isFormValid ) return;
    dispatch( startLoginWithEmailAndPassword( email, password ) );
  };

  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn() );
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={ onSubmit }>
        <Grid container>

          <Grid item xs={ 12 } mb={ 2 }>
            <TextField
              name="email"
              label="email"
              type="email"
              placeholder="email"
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
              name="password"
              label="password"
              type="password"
              placeholder="password"
              fullWidth
              value={ password }
              onChange={ onInputChange }
              autoComplete='off'
              error={ !!passwordValid && formSubmitted }
              helperText={ passwordValid && formSubmitted && passwordValid }
            />

          </Grid>

          <Grid container mb={ 2 } display={ !!errorMessage ? '' : 'none' }>
            <Grid item xs={ 12 }>
              <Alert severity='error'>{ errorMessage }</Alert>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2 }}>

            <Grid item xs={ 12 } sm={ 6 }>
              <Button
                disabled={ isCheckingAuthentication }
                type='submit'
                variant='contained'
                fullWidth
              >
                Login
              </Button>
            </Grid>

            <Grid item xs={ 12 } sm={ 6 }>
              <Button
                disabled={ isCheckingAuthentication }
                variant='contained'
                fullWidth
                onClick={ onGoogleSignIn }
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>

          </Grid>

          <Grid container direction="row" justifyContent='end'>
            <Link component={RouterLink} color='inherit' to="/auth/register">
              Create an account
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  );
};
