import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import Google from "@mui/icons-material/Google";
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form>
        <Grid container>

          <Grid item
            xs={ 12 }
            mb={ 2 }
          >
            <TextField
              label="email"
              type="email"
              placeholder="email"
              fullWidth
            />
          </Grid>

          <Grid item
            xs={ 12 }
            mb={ 2 }
          >
            <TextField
              label="password"
              type="password"
              placeholder="password"
              fullWidth
            />

          </Grid>

          <Grid container spacing={2} sx={{ mb: 2 }}>

            <Grid item xs={ 12 } sm={ 6 }>
              <Button variant='contained' fullWidth>
                Login
              </Button>
            </Grid>

            <Grid item xs={ 12 } sm={ 6 }>
              <Button variant='contained' fullWidth>
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
