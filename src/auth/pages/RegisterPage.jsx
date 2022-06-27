import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from "@mui/material";

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

const initialState = {
  displayName: 'Roberto Gomez Bolaños (chespirito)',
  email: 'chavo8@vencindad.com.mx',
  password: 'semechispoteo'
};

export const RegisterPage = () => {

  const {
    displayName, email, password, onInputChange, onResetForm
  } = useForm( initialState );

  const onSubmit = ( event ) => {
    event.preventDefault();

    console.log({
      displayName,
      email,
      password
    });

  }

  return (
    <AuthLayout title="Register">
      <form onSubmit={ onSubmit }>
        <Grid container>

          <Grid item xs={ 12 } mb={ 2 }>
            <TextField
              label="display name"
              name="displayName"
              type="text"
              placeholder="write your full name"
              fullWidth
              value={ displayName }
              onChange={ onInputChange }
              autoComplete='off'
            />
          </Grid>

          <Grid item xs={ 12 } mb={ 2 }>
            <TextField
              label="email"
              name="email"
              type="email"
              placeholder="email"
              fullWidth
              value={ email }
              onChange={ onInputChange }
              autoComplete='off'
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
            />

          </Grid>

          <Grid container spacing={ 2 } sx={{ mb: 2 }}>

            <Grid item xs={ 12 }>
              <Button
                variant='contained' fullWidth
                type='submit'
              >
                Register
              </Button>
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
