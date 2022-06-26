import { Box } from '@mui/system';
import PropTypes from 'prop-types'

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Navbar */}
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

JournalLayout.propTypes = {};
