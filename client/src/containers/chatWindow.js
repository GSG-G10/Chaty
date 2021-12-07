// import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ChatHeader } from '../components/chatHeader';
import { MessageCard } from '../components/messageCard';
// import { MsgCard } from './msgCard';
import { TypingBar } from '../components/typingBar';
// import Image from '../assets/bg.jpg';
export const ChatWindow = () => (
  <Box display="flex" height="100vh" width="100%" flexWrap="wrap">
    <ChatHeader />
    <MessageCard />
    <TypingBar />
  </Box>
);
