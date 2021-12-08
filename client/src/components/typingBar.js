import { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MoodIcon from '@mui/icons-material/Mood';
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import propTypes from 'prop-types';

export const TypingBar = ({ setmessageHeight }) => {
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

  useEffect(() => {
    const lines =
      (message.match(/\n/g) || '' || message.length >= 49).length + 1;
    if (!message) {
      setmessageHeight(60);
    }
    if (lines < 8) {
      setmessageHeight(lines * 30 + 20);
    }
  }, [message, setmessageHeight]);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
      position="absolute"
      bottom="0"
      right="0"
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
        height="100%"
        maxHeight="100%"
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
            maxHeight: '200px',
            overflow: 'auto',
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

TypingBar.propTypes = {
  setmessageHeight: propTypes.func.isRequired,
};
