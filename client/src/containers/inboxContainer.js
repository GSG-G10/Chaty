import { Box } from '@mui/system';
import { ChatCard } from '../components/chatCard';
import { HeaderTabs } from '../components/headerTabs';
import { SearchBar } from '../components/searchBar';

export const InboxContainer = () => (
  <Box m="7px" width="30%" minWidth="350px">
    <SearchBar />
    <HeaderTabs />
    <Box
      maxHeight="100vh"
      overflow="auto"
      sx={{
        '&::-webkit-scrollbar': {
          width: '0.3em',
        },
        '&::-webkit-scrollbar-track': {
          borderRadius: '20px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#d8dff0',
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
