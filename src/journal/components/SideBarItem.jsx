import { useMemo } from "react";
import { useDispatch } from "react-redux";

import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import TurnedInNot from "@mui/icons-material/TurnedInNot";

import { setActiveNote } from "../../store/journal";

export const SideBarItem = ({ id, title, body, date, imageUrls = [] }) => {

  const dispatch = useDispatch();

  const newTitle = useMemo(() => {
    return title.length > 20 ? title.substring(0, 20) + ' ...' : title;
  }, [ title ]);
  
  const newBody = useMemo(() => {
    return body.length > 25 ? body.substring(0, 25) + ' ...' : body;
  }, [ body ]);

  const onClickedNote = () => {
    dispatch( setActiveNote({ id, title, body, date, imageUrls }) );
  };

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={ onClickedNote }>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={ newTitle } />
          <ListItemText secondary={ newBody } />
        </Grid>
      </ListItemButton>
    </ListItem>
  );

};
