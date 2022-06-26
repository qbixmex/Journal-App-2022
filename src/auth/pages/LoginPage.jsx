import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import Google from "@mui/icons-material/Google";

export const LoginPage = () => {
  return (
    <Grid container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: '100vh',
        backgroundColor: 'primary.main',
        padding: 4
      }}
    >
      <Grid item
        className="box-shadow"
        xs={ 3 }
        sx={{ backgroundColor: 'white', p: 3, borderRadius: 2 }}
      >
        <Typography variant='h1' sx={{ mb: 1, fontSize: '2rem', fontWeight: '400' }}>
          Login
        </Typography>

        <form>
          <Grid container>
            <Grid item xs={ 12 } sx={{ my: 2 }}>

              <TextField
                label="email"
                type="email"
                placeholder="email"
                fullWidth
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mb: 2 }}>
              <TextField
                label="password"
                type="password"
                placeholder="password"
                fullWidth
              />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2 }}>

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
              <Link component={ RouterLink } color='inherit' to="/auth/register">
                Create an account
              </Link>
            </Grid>

          </Grid>
        </form>

      </Grid>
    </Grid>
  );
};
