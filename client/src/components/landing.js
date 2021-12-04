import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from '../assets/bg.jpg';
import { ChatWindow } from './chatWindow';

export const Landing = () => {
  const test = false;
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100%"
      sx={{ backgroundImage: `url(${Image})` }}
    >
      {test ? (
        <Typography
          borderRadius="20px"
          p="3px 14px"
          color="#fff"
          fontSize="0.8rem"
          bgcolor="rgba(0, 0, 0, 0.23)"
          fontFamily="revert"
        >
          Select a chat to start messaging
        </Typography>
      ) : (
        <Box
        // height="100vh"
        // width="100%"
        >
          <ChatWindow />
        </Box>
      )}
    </Box>
  );
};
