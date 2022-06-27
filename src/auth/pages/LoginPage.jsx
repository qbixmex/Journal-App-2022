import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import Google from "@mui/icons-material/Google";

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth';

export const LoginPage = () => {

  const dispatch = useDispatch();

  const { email, password, formState, onInputChange, onResetForm } = useForm({
    email: 'daniel.gb@globant.com',
    password: '0123456789'
  });

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch( checkingAuthentication( email, password ) );
    onResetForm();
  };

  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn( email, password ) );
    onResetForm();
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
            />

          </Grid>

          <Grid container spacing={2} sx={{ mb: 2 }}>

            <Grid item xs={ 12 } sm={ 6 }>
              <Button
                type='submit'
                variant='contained'
                fullWidth
              >
                Login
              </Button>
            </Grid>

            <Grid item xs={ 12 } sm={ 6 }>
              <Button
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
