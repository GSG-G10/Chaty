import { Box } from '@mui/system';
import { ChatHeader } from '../components/chatHeader';
import { Conversation } from '../components/conversation';
import { TypingBar } from '../components/typingBar';

export const ChatWindow = () => (
  <Box display="flex" height="100vh" width="100%" flexWrap="wrap">
    <ChatHeader />
    <Conversation />
    <TypingBar />
  </Box>
);
