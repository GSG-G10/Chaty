import { useState } from 'react';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/system';
import Tabs from '@mui/material/Tabs';

const AntTabs = styled(Tabs)({
  // width: '25%',
  background: '#007fff',
  borderBottom: '1px solid #007fff',
  borderRadius: '13px',
  '& .MuiTabs-indicator': {
    backgroundColor: '#e1f1fc',
    maxWidth: '80%',
  },
  '& .MuiTabs-flexContainer': {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});
const AntTab = styled(Tab)`
  color: #c2e0ff;
  cursor: pointer;
  font-size: 1rem;
  background: #007fff;
  padding: 9px 10px;

  border: none;
  display: flex;

  &.Mui-selected {
    color: #fff;
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

  return (
    <AntTabs
      defaultValue={0}
      value={value}
      onChange={handleChange}
      aria-label="wrapped label tabs example"
    >
      <AntTab value={0} label="Chat" wrapped />
      <AntTab value={1} label="Contacts" />
      <AntTab value={2} label="Channels" />
    </AntTabs>
  );
};
