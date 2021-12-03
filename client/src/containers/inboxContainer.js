import { Box } from '@mui/system';
import { ChatCard } from '../components/chatCard';
import { HeaderTabs } from '../components/headerTabs';
import { SearchBar } from '../components/searchBar';

export const InboxContainer = () => (
  <Box width="30%" minWidth="350px" bgcolor="#ededed">
    <Box Height="16vh">
      <SearchBar />
      <HeaderTabs />
    </Box>
    <Box
      maxHeight="calc(100vh - 16vh)"
      overflow="auto"
      sx={{
        '&::-webkit-scrollbar': {
          width: '0.3em',
        },
        '&::-webkit-scrollbar-track': {
          borderRadius: '20px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#cfd0d4',
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
