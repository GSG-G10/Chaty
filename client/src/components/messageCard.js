import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export const MessageCard = ({ type, msg }) => (
  <Box
    bgcolor={`${type}.main`}
    height="fit-content"
    maxWidth="450px"
    width="fit-content"
    m="0 30px"
    mb="12px"
    boxShadow="0 1px 4px #8a8a8a"
    borderRadius="5px"
    sx={{ overflowWrap: 'break-word' }}
    alignSelf={type === 'sent' ? 'end' : 'start'}
  >
    <Typography p="4px 10px" fontSize="0.9rem">
      {msg}
    </Typography>
  </Box>
);
