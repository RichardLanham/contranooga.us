import React, { useState, useEffect } from "react";
import { Box, Button, Card, Typography } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
const CallbackMessages = (props) => {
  const theme = useTheme();
  const [show, setShow] = useState(false);

  const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: "green",
    position: "absolute",
    zIndex: theme.zIndex.modal,
  }));

  useEffect(() => {
    if (props.messages) {
      setShow(true);
    }
  }, []);

  if (show) {
    return (
      <StyledBox>
        <Card>
          <Typography>{props.messages.message}</Typography>
          <Button onClick={() => setShow(false)}>Close</Button>
        </Card>
      </StyledBox>
    );
  }
  return <div></div>;
};

export default CallbackMessages;
