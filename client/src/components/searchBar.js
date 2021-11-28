import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

export const SearchBar = () => (
  <Paper
    component="form"
    sx={{
      width: '24%',
      p: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      boxShadow: 'none',
    }}
  >
    <IconButton sx={{ p: '10px' }} aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Box
      width="100%"
      borderRadius={12}
      sx={{ background: '#ededed', maxHeight: '40px' }}
    >
      <IconButton type="submit" sx={{ p: '5px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ flex: 1 }}
        placeholder="Search "
        inputProps={{ 'aria-label': 'search field' }}
      />
    </Box>
  </Paper>
);
