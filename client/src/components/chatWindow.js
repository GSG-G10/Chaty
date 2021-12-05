// import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ChatHeader } from './chatHeader';
// import { MsgCard } from './msgCard';
import { TypingBar } from './typingBar';
// import Image from '../assets/bg.jpg';

export const ChatWindow = () => (
  <Box display="flex" height="100vh" width="100%" flexWrap="wrap">
    <ChatHeader />
    <TypingBar />
  </Box>
);
