import { Box } from '@mui/system';
import { useRef, useEffect } from 'react';
import { MessageCard } from './messageCard';

export const Conversation = () => {
  const text = 'hi from props, do I look good? ';

  const toChatEnd = useRef();

  useEffect(() => {
    toChatEnd.current.scrollTo(0, toChatEnd.current.scrollHeight);
  }, []);

  return (
    <Box
      height="100%"
      width="100%"
      display="flex"
      flexDirection="column"
      overflow="auto"
      ref={toChatEnd}
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
      <MessageCard
        type="received"
        msg="Often a card allow users to interact with the entirety of its surface to trigger its main action, be it an expansion, a link to another screen or some other behavior."
      />
      <MessageCard type="sent" msg={text} />
      <MessageCard type="received" msg={text} />
      <MessageCard
        type="sent"
        msg="Often a card allow users to interact with the entirety of its surface to trigger its main action, be it an expansion, a link to another screen or some other behavior."
      />
      <MessageCard type="sent" msg="4674545" />
      <MessageCard type="sent" msg="4674545" />
      <MessageCard type="received" msg="end" />
    </Box>
  );
};
