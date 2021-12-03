import { Box } from '@mui/system';
import { Chatcontainer } from '../containers/chatContainer';
import { InboxContainer } from '../containers/inboxContainer';

export const MainPage = () => (
  <Box display="flex">
    <InboxContainer />
    <Chatcontainer />
  </Box>
);
