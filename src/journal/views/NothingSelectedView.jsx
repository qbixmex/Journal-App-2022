import StarOutline from "@mui/icons-material/StarOutline";
import { Grid, Typography } from "@mui/material";

export const NothingSelectedView = () => {
  return (
    <Grid container
      className='animate__animated animate__fadeIn animate__faster'
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      borderRadius={ 1 }
      sx={{
        minHeight: 'calc(100vh - 96px)',
        backgroundColor: 'primary.main',
        padding: 4
      }}
    >

      <Grid item xs={ 12 }>
        <StarOutline color='info' sx={{ fontSize: 200 }} />
      </Grid>

      <Grid item xs={ 12 }>
        <Typography color='white' sx={{ fontSize: '2rem' }}>
          Select or create a new post
        </Typography>
      </Grid>

    </Grid>
  );
};
