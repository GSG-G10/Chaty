import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export const TypingBar = () => (
  <Box
    p="6px 25px"
    display="flex"
    flexDirection="column"
    height="7%"
    bgcolor="#fafafa"
    alignSelf="flex-end"
    width="100%"
  >
    <Typography fontWeight="normal" fontSize="0.96rem" color="#343a40">
      typing bar
    </Typography>
  </Box>
);
