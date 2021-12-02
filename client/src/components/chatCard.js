import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red, green } from '@mui/material/colors';
import { Box } from '@mui/system';
// import { colors } from '@material-ui/core';
import { Typography } from '@mui/material';

export const ChatCard = () => (
  <Card
    variant="outlined"
    sx={{
      maxWidth: 345,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      pt: '10px',
      border: 'none',
    }}
  >
    <Box>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            N
          </Avatar>
        }
        title="Nour Adawi"
        subheader={
          <Typography sx={{ fontSize: '0.9rem', color: 'secondary.A400' }}>
            {' '}
            How is everything going?
          </Typography>
        }
      />
    </Box>
    <Box p="10px 20px 10px">
      <Typography sx={{ fontSize: '0.9rem', color: 'secondary.A400' }}>
        17:50
      </Typography>
      <Box
        pl="7px"
        pr="7px"
        borderRadius="50px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="auto"
        height="30px"
        bgcolor={green[500]}
        color="white.main"
        fontWeight="bold"
        fontSize="0.9rem"
      >
        {' '}
        20{' '}
      </Box>
    </Box>
  </Card>
);
