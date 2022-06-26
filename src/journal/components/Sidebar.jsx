import PropTypes from 'prop-types';
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import TurnedInNot from '@mui/icons-material/TurnedInNot';

export const SideBar = ({ drawerWidth }) => {
  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant='permanent' // Could be: temporary
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >

        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            Daniel
          </Typography>
        </Toolbar>

        <Divider />

        <List>
          {
            ['January', 'February', 'March', 'April', 'May', 'June'].map(text => (
              <ListItem key={ text } disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={ text } />
                    <ListItemText secondary={ 'The new chapter of **** *** was amazing because finally ...' } />
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>

      </Drawer>
    </Box>
  );
};

SideBar.propTypes = {
  drawerWidth: PropTypes.number.isRequired
};