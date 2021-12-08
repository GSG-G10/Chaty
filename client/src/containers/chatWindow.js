import { Box } from '@mui/system';
import { useState } from 'react';
import { ChatHeader } from '../components/chatHeader';
import { Conversation } from '../components/conversation';
import { TypingBar } from '../components/typingBar';

export const ChatWindow = () => {
  const [messageHeight, setmessageHeight] = useState(60);

  return (
    <Box display="flex" height="100vh" width="100%" flexDirection="column">
      <div style={{ height: '40px', width: '100%' }}>
        <ChatHeader />
      </div>
      <div
        style={{
          height: `calc(100% -  ${messageHeight + 40}px`,
          width: '100%',
          marginTop: '12px',
        }}
      >
        <Conversation />
      </div>
      <div
        style={{
          width: '100%',
          height: `calc(100% -  ${messageHeight - 40}px`,
          position: 'relative',
        }}
      >
        <TypingBar setmessageHeight={setmessageHeight} />
      </div>
    </Box>
  );
};
