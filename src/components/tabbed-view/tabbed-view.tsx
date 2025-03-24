import * as React from 'react';
import { ThemeContext } from '@emotion/react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styles from './tabbed-view.module.css';

interface TabProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

type TabbedViewProps = {
  tabs: { label: string; content: React.ReactNode }[];
};

const TabbedView = (props: TabbedViewProps) => {
  const [value, setValue] = React.useState(0);

  const theme = React.useContext(ThemeContext);
  let tabColour = undefined;
  switch (theme) {
    case 'peopleflow':
      tabColour = styles.peopleflowTabColour;
      break;
    case 'worklight':
      break;
    case 'skillbook':
      break;
    case 'quicktask':
      tabColour = styles.quicktaskTabColour;
      break;
    case undefined:
      break;
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabs = props.tabs.map((tab, index) => (
    <Tab key={index} label={tab.label} {...a11yProps(index)} disableRipple={true} />
  ));
  const contents = props.tabs.map((tab, index) => (
    <CustomTabPanel key={index} value={value} index={index}>
      {tab.content}
    </CustomTabPanel>
  ));

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: tabColour,
            },
            '& .MuiTab-root.Mui-selected': {
              color: tabColour,
            },
          }}
          aria-label="Tabbed view"
        >
          {tabs}
        </Tabs>
      </Box>
      {contents}
    </Box>
  );
};

export default TabbedView;
