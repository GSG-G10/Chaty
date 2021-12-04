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
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      pt: '10px',
      border: 'none',
      // borderBottom: ' 1px solid #ededed',
      borderRadius: 0,
      cursor: 'pointer',
      '&:hover': { bgcolor: '#ededed' },
    }}
  >
    <Box>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500], width: 45, height: 45 }}
            aria-label="recipe"
          >
            N
          </Avatar>
        }
        title="Nour Adawi"
        subheader={
          <Typography
            sx={{
              fontSize: '0.9rem',
              color: 'secondary.A400',
            }}
          >
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
        borderRadius="50px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="fit-content"
        height="8px"
        bgcolor={green[500]}
        color="white.main"
        fontSize="0.9rem"
        p="10px"
      >
        {' '}
        5{' '}
      </Box>
    </Box>
  </Card>
);
