import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
// import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
// import { useTheme } from '@mui/styles';

import { styled } from '@mui/system';
import { TabList, TabPanel, TabContext } from '@mui/lab';

// const primary = {
//   50: 'red',
//   100: '#C2E0FF',
//   200: '#80BFFF',
//   300: '#66B2FF',
//   400: '#3399FF',
//   500: '#007FFF',
//   600: '#0072E5',
//   700: '#0059B2',
//   800: '#004C99',
//   900: '#003A75',
// };

const TabTest = styled(Tab)`
  color: primary.900;
  cursor: pointer;
  font-size: 1rem;
  background: secondary.main;
  padding: 15px 20px;
  border: none;
  display: flex;

  &.Mui-selected {
    color: primary[900];
    font-weight: bold;
  }

  &:hover {
    color: #fff;
  }
`;

export const HeaderTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const theme = useTheme();
  return (
    <Box
      color="secondary.main"
      sx={{ width: '22%', typography: 'body1', border: 1 }}
    >
      <TabContext value={value}>
        <Box sx={{ padding: 0 }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <TabTest sx={{ p: 1.5 }} label="Chat" value="1" />
            <TabTest sx={{ p: 1.5 }} label="Contacts" value="2" />
            <TabTest sx={{ p: 1.5 }} label="Channels" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">one</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
};
