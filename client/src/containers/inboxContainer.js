import { Box } from '@mui/system';
import { ChatCard } from '../components/chatCard';
import { HeaderTabs } from '../components/headerTabs';
import { SearchBar } from '../components/searchBar';

export const InboxContainer = () => (
  <Box
    width="40%"
    minWidth="350px"
    bgcolor="#ededed"
    height="100vh%"
    borderRight="2px solid #b0b0b0"
  >
    <Box Height="16vh">
      <SearchBar />
      <HeaderTabs />
    </Box>
    <Box
      maxHeight="calc(100vh - 16vh)"
      overflow="auto"
      sx={{
        '&::-webkit-scrollbar': {
          width: '0.2em',
        },
        '&::-webkit-scrollbar-track': {
          borderRadius: '20px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#b0b0b0',
          borderRadius: '20px',
        },
      }}
    >
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
      <ChatCard />
    </Box>
  </Box>
);
