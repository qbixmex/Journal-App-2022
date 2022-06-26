import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>

      <NothingSelectedView />

      {/* <NoteView /> */}

      <IconButton
        size='large'
        sx={{
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.8 },
          transition: 'opacity .25s ease-in-out',
          position: 'fixed',
          bottom: 50,
          right: 50
        }}
      >
        <AddOutlined sx={{ color: 'white', fontSize: 30 }} />
      </IconButton>

    </JournalLayout>
  );
};
