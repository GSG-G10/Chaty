// import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Box from '@mui/material/Box';
// import Tab, { tabClasses } from '@mui/material/Tab';
import Tab from '@mui/material/Tab';

import { styled } from '@mui/system';
// import { TabList, TabPanel } from '@mui/lab';
// import { buttonClasses } from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';

// const TabCustom = styled(Tab)`
//   color: #c2e0ff;
//   cursor: pointer;
//   font-size: 1rem;
//   background: #007fff;
//   padding: 15px 20px;
//   border: none;
//   display: flex;

//   &.Mui-selected {
//     color: #fff;
//     font-weight: bold;
//   }

//   &:hover {
//     color: #fff;
//   }

//   &.${buttonClasses.focusVisible} {
//     color: #fff;
//     outline: none;
//     background-color: #0072e5;
//     border-bottom: 2px solid #0072e5;
//   }
//   &.${tabClasses.selected} {
//     border-bottom: 2px solid #fff;
//   }
//   &.${buttonClasses.disabled} {
//     opacity: 0.5;
//     cursor: not-allowed;
//     box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
//   }
// `;

// const TabPanelCustom = styled(TabPanel)`
//   width: 100%;
// `;

// const TabListCustom = styled(TabList)`
//   background-color: #007fff;
//   border-radius: 8px;
//   box-shadow: 0 20px 25px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.02);
//   padding: 0 10px 0 10px;
//   margin-bottom: 10px;
//   display: flex;
//   align-content: space-between;
// `;
const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #007fff',
  width: '25%',
  '& .MuiTabs-indicator': {
    backgroundColor: '#fff',
  },
});

const AntTab = styled(Tab)`
  color: #c2e0ff;
  cursor: pointer;
  font-size: 1rem;
  background: #007fff;
  padding: 15px 20px;
  border: none;
  display: flex;

  &.Mui-selected {
    color: #fff;
    font-weight: bold;
    border-bottom: 2px solid #fff;
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

  // const StyledTabs = styled((props) => (
  //   <Tabs
  //     {...props}
  //     TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  //   />
  // ))({
  //   '& .MuiTabs-indicator': {
  //     display: 'flex',
  //     justifyContent: 'center',
  //     backgroundColor: 'transparent',
  //   },
  //   '& .MuiTabs-indicatorSpan': {
  //     maxWidth: 70,
  //     width: '100%',
  //     backgroundColor: '#fff',
  //   },
  // });

  // const StyledTab = styled((props) => <Tab {...props} />)(({ theme }) => ({
  //   textTransform: 'none',
  //   fontWeight: theme.typography.fontWeightRegular,
  //   fontSize: theme.typography.pxToRem(15),
  //   marginRight: theme.spacing(1),
  //   color: 'rgba(255, 255, 255, 0.7)',
  //   '&.Mui-selected': {
  //     color: '#fcba03',
  //   },
  //   '&.Mui-focusVisible': {
  //     backgroundColor: 'rgba(100, 95, 228, 0.32)',
  //   },
  // }));

  // export const HeaderTabs = () => {
  //   const [value, setValue] = useState(0);

  //   const handleChange = (event, newValue) => {
  //     setValue(newValue);
  //   };
  return (
    <AntTabs
      value={value}
      onChange={handleChange}
      aria-label="wrapped label tabs example"
    >
      <AntTab value="one" label="Chat" wrapped />
      <AntTab value="two" label="Contacts" />
      <AntTab value="three" label="Channels" />
    </AntTabs>
  );
  // <Box sx={{ width: '100%' }}>
  //   <Box sx={{ bgcolor: '#2e1534' }}>
  //     <StyledTabs
  //       value={value}
  //       onChange={handleChange}
  //       aria-label="styled tabs example"
  //     >
  //       <StyledTab label="Workflows" />
  //       <StyledTab label="Datasets" />
  //       <StyledTab label="Connections" />
  //     </StyledTabs>
  //     <Box sx={{ p: 3 }} />
  //   </Box>
  // </Box>
};

// &.${buttonUnstyledClasses.focusVisible} {
//   color: #fff;
//   outline: none;
//   background-color: #0072e5;
//   border-bottom: 2px solid #0072e5;
// }

// &.${tabUnstyledClasses.selected} {
//   border-bottom: 2px solid #fff;
// }

// &.${buttonUnstyledClasses.disabled} {
//   opacity: 0.5;
//   cursor: not-allowed;
//   box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
// }
