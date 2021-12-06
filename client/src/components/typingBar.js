import { useState } from 'react';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MoodIcon from '@mui/icons-material/Mood';
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';

export const TypingBar = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    if (message) {
      event.preventDefault();
      // eslint-disable-next-line no-console
      console.log('here submit', message);
    } else {
      event.preventDefault();
    }
  };

  const handleKeypress = (e) => {
    if (e.code === 'Enter' && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  return (
    <Box
      p="6px 35px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="auto"
      bgcolor="#ededed"
      alignSelf="flex-end"
      width="100%"
    >
      <AttachFileOutlinedIcon
        fontWeight="normal"
        cursor="pointer"
        sx={{ height: '1.6rem', width: '1.6rem', mr: '5px', color: '#595959' }}
      />
      <Box
        width="100%"
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <TextField
          multiline
          id="message"
          name="message"
          placeholder="Type a message..."
          variant="outlined"
          onChange={handleChange}
          size="small"
          fullWidth
          onKeyPress={handleKeypress}
          InputProps={{
            style: {
              backgroundColor: '#fff',
              borderRadius: '30px',
              color: '#000',
              fontSize: '1rem',
              fontWeight: 'normal',
            },
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                border: 'none',
              },
            },
            pt: '10px',
            pb: '10px',
          }}
        />
        <MoodIcon
          fontWeight="normal"
          cursor="pointer"
          sx={{
            height: '1.7rem',
            width: '1.7rem',
            ml: '5px',
            mr: '5px',
            color: '#595959',
          }}
        />
        <Button type="submit">
          <SendIcon
            fontWeight="normal"
            cursor="pointer"
            type="submit"
            sx={{
              height: '1.8rem',
              width: '1.8rem',
              mr: '15px',
              color: message ? '#097aeb' : '#595959',
            }}
          />{' '}
        </Button>
      </Box>
    </Box>
  );
};
