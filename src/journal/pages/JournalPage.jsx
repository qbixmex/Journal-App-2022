import { Typography } from "@mui/material";
import { JournalLayout } from "../layout";

export const JournalPage = () => {
  return (
    <JournalLayout>

      <Typography variant='h1' fontSize='3rem'>
        Journal Page
      </Typography>

      <Typography>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Dignissimos error eos commodi nisi dolorem numquam blanditiis alias
        architecto necessitatibus enim, illo unde, nulla eligendi rem.
      </Typography>  

    </JournalLayout>
  );
};
