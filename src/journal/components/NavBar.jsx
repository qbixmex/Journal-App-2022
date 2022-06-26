import PropTypes from 'prop-types'
import LogoutOutlined from "@mui/icons-material/LogoutOutlined";
import MenuOutlined from "@mui/icons-material/MenuOutlined";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";

export const Navbar = ({ drawerWidth }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { md: `calc(100% - ${ drawerWidth }px)` },
        ml: { md: `${ drawerWidth }px` }
      }}
    >
      <Toolbar>

        <IconButton
          color='inherit'
          edge='start'
          sx={{ mr: 2, display: { md: 'none' } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid container
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <Typography
            variant='h6' noWrap component='div'
            
          >Journal App</Typography>

          <IconButton color='info'>
            <LogoutOutlined />
          </IconButton>
        </Grid>

      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  drawerWidth: PropTypes.number.isRequired
};
