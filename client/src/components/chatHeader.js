import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export const ChatHeader = () => (
  <Box
    p="6px 25px"
    display="flex"
    flexDirection="column"
    height="6.5%"
    bgcolor="#fafafa"
    width="100%"
  >
    <Typography fontWeight="normal" fontSize="0.96rem" color="#343a40">
      Nour Adawi
    </Typography>
    <Typography fontWeight="400" fontSize="0.8rem" color="#a0a8b0">
      Last seen 5 minutes ago
    </Typography>
  </Box>
);
