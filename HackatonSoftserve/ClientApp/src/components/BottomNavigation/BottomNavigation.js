import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PeopleIcon from '@mui/icons-material/People';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export default function Navigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: '100%', position: 'absolute', bottom: '0' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}>
        <BottomNavigationAction label="Teachers" icon={<PeopleIcon />} />
        <BottomNavigationAction label="Subjects" icon={<AutoStoriesIcon />} />
      </BottomNavigation>
    </Box>
  );
}
