import { Box } from '@mui/system';
import { MessageCard } from './messageCard';

export const Conversation = () => {
  const text = 'hi from props, do I look good? ';
  return (
    <Box
      height="80%"
      width="100%"
      display="flex"
      flexDirection="column"
      maxHeight="80%"
      overflow="auto"
      m="0 5px"
      sx={{
        '&::-webkit-scrollbar': {
          width: '0.3em',
        },
        '&::-webkit-scrollbar-track': {
          borderRadius: '20px',
          backgroundColor: 'rgba(18, 18, 18, 0.17)',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#f5f6f7',
          borderRadius: '20px',
        },
      }}
    >
      <MessageCard type="sent" msg={text} />
      <MessageCard type="received" msg={text} />
    </Box>
  );
};
