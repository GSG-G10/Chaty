import { useState } from 'react';
import { Box } from '@mui/system';
import { ChatHeader } from '../components/chatHeader';
import { Conversation } from '../components/conversation';
import { TypingBar } from '../components/typingBar';

export const ChatWindow = () => {
  const [heigther, setHeigther] = useState(60);

  return (
    <Box display="flex" height="100vh" width="100%" flexDirection="column">
      <div style={{ height: '40px', width: '100%' }}>
        <ChatHeader />
      </div>
      <div
        style={{
          height: `calc(100% -  ${heigther + 40}px`,
          width: '100%',
        }}
      >
        <Conversation />
      </div>
      <div
        style={{
          width: '100%',
          height: `calc(100% -  ${heigther - 40}px`,
          position: 'relative',
        }}
      >
        <TypingBar setHeigther={setHeigther} />
      </div>
    </Box>
  );
};
