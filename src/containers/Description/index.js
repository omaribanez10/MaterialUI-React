import { Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import LocationInformation from "../../components/LocationInformation";
import PaperInformation from "../../components/PaperInformation";

const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;
  return (
    <Fragment>
      <Stack sx={{
                justifyContent:'center'
            }}>
        {bio !== null ? (
          <Typography variant="body1">{bio}</Typography>
        ) : (
          <Typography variant="body1">
            Identifies which additional information you'd like to receive about
            the person's hovercard.
          </Typography>
        )}
      </Stack>
      <PaperInformation userState={userState}/>
      <LocationInformation userState={userState}/>
    </Fragment>
  );
};

export default Description;
