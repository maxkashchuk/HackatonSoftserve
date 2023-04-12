import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import HandshakeIcon from '@mui/icons-material/Handshake';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PlaylistAddCircleIcon from '@mui/icons-material/PlaylistAddCircle';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';

export default function Navigation() {
  const [value, setValue] = useState(0);

  const [userRole, setUserRole] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (LoggedInService() === true) {
      GetUserService().then((res) => {
        setUserRole(res.role);
      });
    }
  }, []);

  // function check()
  // {
  //   console.log(userRole);
  // }

  function goToProfile() {
    navigate('/studentprofile');
  }

  function goToAdminPanel() {
    navigate('/adminpanel');
  }

  function goToAddSubjects() {
    navigate('/addsubject');
  }

  function goToSubjectsHome() {
    navigate('/subjecthome');
  }

  function goToHome() {
    navigate('/');
  }

  return (
    <Box
      sx={{
        width: '100%',
        position: 'absolute',
        marginTop: '8vh',
        bottom: '0',
      }}>
      {userRole === 'student' && (
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}>
          <BottomNavigationAction onClick={goToHome} label="Teachers" icon={<SchoolIcon />} />
          <BottomNavigationAction
            onClick={goToSubjectsHome}
            label="Subjects"
            icon={<HistoryEduIcon />}
          />
          <BottomNavigationAction
            onClick={goToProfile}
            label="Profile"
            icon={<AccountCircleIcon />}
          />
        </BottomNavigation>
      )}
      {userRole === 'teacher' && (
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}>
          <BottomNavigationAction onClick={goToHome} label="Colleagues" icon={<HandshakeIcon />} />
          <BottomNavigationAction
            onClick={goToSubjectsHome}
            label="Subjects"
            icon={<AutoStoriesIcon />}
          />
          <BottomNavigationAction
            onClick={goToProfile}
            label="Profile"
            icon={<AccountCircleIcon />}
          />
        </BottomNavigation>
      )}
      {userRole === 'admin' && (
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}>
          <BottomNavigationAction onClick={goToHome} label="Teachers" icon={<PeopleIcon />} />
          <BottomNavigationAction
            onClick={goToSubjectsHome}
            label="Subjects"
            icon={<AutoStoriesIcon />}
          />
          {/* <BottomNavigationAction label="Modify users" icon={<PublishedWithChangesIcon />} /> */}
          <BottomNavigationAction
            onClick={goToAddSubjects}
            label="Add subjects"
            icon={<PlaylistAddCheckCircleIcon />}
          />
          {/* <BottomNavigationAction label="Modify subjects" icon={<PlaylistAddCircleIcon />} /> */}
          <BottomNavigationAction
            onClick={goToAdminPanel}
            label="Admin panel"
            icon={<AdminPanelSettingsIcon />}
          />
        </BottomNavigation>
      )}
      {userRole === null && (
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}>
          <BottomNavigationAction onClick={goToHome} label="Teachers" icon={<PeopleIcon />} />
          <BottomNavigationAction
            onClick={goToSubjectsHome}
            label="Subjects"
            icon={<AutoStoriesIcon />}
          />
        </BottomNavigation>
      )}
    </Box>
  );
}
