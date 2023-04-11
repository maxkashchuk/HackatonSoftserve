import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PeopleIcon from '@mui/icons-material/People';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import GetUserService from '../GetUserService';
import LoggedInService from '../LoggedInService';
import SchoolIcon from '@mui/icons-material/School';

export default function Navigation() {
  const [value, setValue] = useState(0);

  const [userLogged, setUserLogged] = useState(null);

  const[userRole, setUserRole] = useState(null);

  useEffect(() => {
    if(LoggedInService() === true)
    {
      setUserLogged(setTimeout(() => {
        GetUserService()
      }, 1000));
    }
  }, []);

  function check()
  {
    console.log(userLogged.role);
  }

  return (
    <Box sx={{ width: '100%', position: 'absolute', bottom: '0' }}>
      {
        null === 'student' &&
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}>
        <BottomNavigationAction onClick={check} label="Teachers" icon={<SchoolIcon />} />
        <BottomNavigationAction label="Subjects" icon={<AutoStoriesIcon />} />
      </BottomNavigation>
      }
      {
        null === 'teacher' &&
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}>
        <BottomNavigationAction onClick={check} label="Teachers" icon={<PeopleIcon />} />
        <BottomNavigationAction label="Subjects" icon={<AutoStoriesIcon />} />
      </BottomNavigation>
      }
      {
        null === 'admin' &&
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}>
        <BottomNavigationAction onClick={check} label="Teachers" icon={<PeopleIcon />} />
        <BottomNavigationAction label="Subjects" icon={<AutoStoriesIcon />} />
      </BottomNavigation>
      }
      {
        null === null &&
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}>
        <BottomNavigationAction onClick={check} label="Teachers" icon={<PeopleIcon />} />
        <BottomNavigationAction label="Subjects" icon={<AutoStoriesIcon />} />
      </BottomNavigation>
      }
    </Box>
  );
}
