import { useMemo } from "react";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import TurnedInNot from "@mui/icons-material/TurnedInNot";

export const SideBarItem = ({ title, body }) => {

  const newTitle = useMemo(() => {
    return title.length > 20 ? title.substring(0, 20) + ' ...' : title;
  }, [ title ]);
  
  const newBody = useMemo(() => {
    return body.length > 25 ? body.substring(0, 25) + ' ...' : body;
  }, [ body ]);

  return (
    <ListItem disablePadding>
      <ListItemButton>
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
