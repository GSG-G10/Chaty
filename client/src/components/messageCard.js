import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export const MessageCard = () => (
  <Box
    bgcolor="received.main"
    height="fit-content"
    maxWidth="450px"
    m="0 30px"
    boxShadow="0 1px 4px #8a8a8a"
    borderRadius="5px"
    sx={{ overflowWrap: 'break-word' }}
  >
    <Typography p="4px 10px" fontSize="1rem">
      {' '}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus
      ante convallis felis egestas, in pellentesque urna consectetur. Sed sit
      amet ipsum ultrices, aliquam neque at, varius massa. Ut sodales eros non
      risus hendrerit elementum. Aenean dui ex, tempus ut
    </Typography>
  </Box>
);
