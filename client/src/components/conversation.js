import { Box } from '@mui/system';
import { MessageCard } from './messageCard';

export const Conversation = ({ heigther }) => {
  const text = 'hi from props, do I look good? ';
  return (
    <Box
      // maxHeight={`calc(100% - ${heigther}px)`}
      height="100%"
      width="100%"
      display="flex"
      flexDirection="column"
      overflow="auto"
      mt="15px"
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
      <MessageCard type="sent" msg="11111111111" />
      <MessageCard type="received" msg={text} />
      <MessageCard type="sent" msg={text} />
      <MessageCard type="received" msg={text} />
      <MessageCard type="sent" msg={text} />
      <MessageCard type="received" msg={text} />
      <MessageCard type="sent" msg={text} />
      <MessageCard type="received" msg={text} />
      <MessageCard type="sent" msg={text} />
      <MessageCard type="received" msg={text} />
      <MessageCard type="sent" msg={text} />
      <MessageCard type="received" msg={text} />
      <MessageCard type="sent" msg={text} />
      <MessageCard type="received" msg={text} />
      <MessageCard type="sent" msg={text} />
      <MessageCard type="received" msg={text} />
      <MessageCard type="sent" msg={text} />
      <MessageCard type="received" msg={text} />
      <MessageCard type="sent" msg={text} />
      <MessageCard type="received" msg={text} />
      <MessageCard type="sent" msg={text} />
      <MessageCard type="received" msg={text} />
      <MessageCard type="sent" msg={text} />
      <MessageCard type="received" msg={text} />
      <MessageCard type="sent" msg={text} />
      <MessageCard type="received" msg={text} />
      <MessageCard type="sent" msg={text} />
      <MessageCard type="received" msg={text} />
      <MessageCard type="sent" msg={text} />
      <MessageCard type="sent" msg={text} />
      <MessageCard type="sent" msg={text} />
      <MessageCard type="sent" msg={text} />
      <MessageCard type="received" msg={text} />
      <MessageCard type="sent" msg={text} />
      <MessageCard type="received" msg={text} />
      <MessageCard type="sent" msg="4674545" />
      <MessageCard type="sent" msg="4674545" />
      <MessageCard type="sent" msg="4674545" />
      <MessageCard type="received" msg="4674545" />
    </Box>
  );
};
