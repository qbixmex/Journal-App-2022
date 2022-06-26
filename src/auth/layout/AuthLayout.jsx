import PropTypes from 'prop-types';
import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({ children, title }) => {
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
        sx={{
          width: { sm: 450  },
          backgroundColor: '#f7f7f7',
          padding: 3,
          borderRadius: 2,
        }}
      >

        <Typography
          variant='h1'
          sx={{ mb: 2, fontSize: '2rem', fontWeight: '400' }}
        >
          { title }
        </Typography>

        { children }

      </Grid>

    </Grid>
  );
};

AuthLayout.propTypes = {
  title: PropTypes.string.isRequired
};
