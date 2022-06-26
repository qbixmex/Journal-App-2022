import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import Google from "@mui/icons-material/Google";
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid container>

          <Grid item xs={ 12 } mb={ 2 }>
            <TextField
              label="full name"
              name="full_name"
              type="full_name"
              placeholder="full name"
              fullWidth
            />
          </Grid>

          <Grid item xs={ 12 } mb={ 2 }>
            <TextField
              label="email"
              name="email"
              type="email"
              autoComplete='off'
              placeholder="email"
              fullWidth
            />
          </Grid>

          <Grid item xs={ 12 } mb={ 2 }>
            <TextField
              label="password"
              type="password"
              placeholder="password"
              fullWidth
            />

          </Grid>

          <Grid container spacing={ 2 } sx={{ mb: 2 }}>

            <Grid item xs={ 12 }>
              <Button variant='contained' fullWidth>
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
