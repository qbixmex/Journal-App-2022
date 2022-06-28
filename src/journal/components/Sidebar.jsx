import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material';
import { SideBarItem } from './';

export const SideBar = ({ drawerWidth }) => {

  const { displayName } = useSelector(({ auth }) => auth );
  const { notes } = useSelector(({ journal }) => journal );

  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant='permanent'
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >

        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            { displayName }
          </Typography>
        </Toolbar>

        <Divider />

        <List>
          {
            notes.map(({ id, title, body }) => (
              <SideBarItem key={ id } { ...{ title, body } } />
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