import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import { Navbar, SideBar } from '../components';

const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
  return (
    <Box
      className='animate__animated animate__fadeIn animate__faster'
      sx={{ display: 'flex' }}
    >
      <Navbar drawerWidth={ drawerWidth } />
      <SideBar drawerWidth={ drawerWidth } />
      <Box
        id="journal-layout"
        component='main'
        sx={{ flexGrow: 1, p: 2 }}
      >
        <Toolbar />
        { children }
      </Box>
    </Box>
  );
};
