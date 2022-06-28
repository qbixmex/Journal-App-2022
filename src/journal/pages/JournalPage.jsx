import { useDispatch, useSelector } from "react-redux";

import { JournalLayout } from "../layout";
import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { startNewNote } from "../../store/journal";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector(({ journal }) => journal);

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>

      { !!active ? <NoteView /> : <NothingSelectedView /> }

      <IconButton
        size='large'
        onClick={ onClickNewNote }
        disabled={ isSaving }
        sx={{
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.8 },
          transition: 'opacity .25s ease-in-out',
          position: 'fixed',
          bottom: 50,
          right: 50
        }}
      >
        <AddOutlined sx={{
          color: isSaving ? 'primary.main' : 'white',
          fontSize: 30
        }} />
      </IconButton>

    </JournalLayout>
  );
};
