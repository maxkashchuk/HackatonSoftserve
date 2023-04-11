import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PeopleIcon from '@mui/icons-material/People';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LoggedInService from '../LoggedInService';
import GetUserService from '../GetUserService';
import SchoolIcon from '@mui/icons-material/School';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navigation() {
  const [value, setValue] = useState(0);

  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    if(LoggedInService() === true)
    {
      GetUserService().then(res => {setUserRole(res.role)});
    }
  }, []);

  // function check()
  // {
  //   console.log(userRole);
  // }

  return (
    <Box sx={{ width: '100%', position: 'absolute', bottom: '0' }}>
      {
        userRole === 'student' &&
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}>
        <BottomNavigationAction label="Teachers" icon={<SchoolIcon />} />
        <BottomNavigationAction label="Subjects" icon={<HistoryEduIcon />} />
        <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
      </BottomNavigation>
      }
      {
        userRole === 'teacher' &&
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}>
        <BottomNavigationAction label="Teachers" icon={<PeopleIcon />} />
        <BottomNavigationAction label="Subjects" icon={<AutoStoriesIcon />} />
        <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
      </BottomNavigation>
      }
      {
        userRole === 'admin' &&
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}>
        <BottomNavigationAction label="Teachers" icon={<PeopleIcon />} />
        <BottomNavigationAction label="Subjects" icon={<AutoStoriesIcon />} />
        <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
      </BottomNavigation>
      }
      {
        userRole === null &&
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}>
        <BottomNavigationAction label="Teachers" icon={<PeopleIcon />} />
        <BottomNavigationAction label="Subjects" icon={<AutoStoriesIcon />} />
      </BottomNavigation>
      }
    </Box>
  );
}
