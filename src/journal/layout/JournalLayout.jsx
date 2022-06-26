import { Box } from '@mui/system';
// import PropTypes from 'prop-types'
import { Navbar } from '../components';

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar drawerWidth={ drawerWidth } />
      {/* Sidebar */}
      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3 }}
      >
        {/* Toolbar */}
        { children }
      </Box>
    </Box>
  );
};

// JournalLayout.propTypes = {};
