import { Box } from '@mui/system';
import { Chatcontainer } from '../containers/chatAreaContainer';
import { InboxContainer } from '../containers/inboxContainer';

export const MainPage = () => (
  <Box display="flex">
    <InboxContainer />
    <Chatcontainer />
  </Box>
);
