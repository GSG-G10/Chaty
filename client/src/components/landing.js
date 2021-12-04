import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from '../assets/bg.jpg';

export const Landing = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh"
    width="100%"
    sx={{ backgroundImage: `url(${Image})` }}
  >
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
  </Box>
);
