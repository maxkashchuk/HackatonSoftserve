import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NavBar from '../NavBar/NavBar';
import './StudentProfile.css';
import { Avatar, Button, Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import GetUserService from '../GetUserService';
import LoggedInService from '../LoggedInService';
/*

function saveData() {
    localStorage.getItem("saveLocal")===' '?setStateLocaleStorage(true) : setStateLocaleStorage(false)
                       
    
}*/

const StudentProfile = () => {
  const navigate = useNavigate();
  function goHome() {
    navigate('/');
  }
  function changeUser() {
    navigate('/changeuserdata');
  }

  const [userData, setUserData] = useState('');

  useEffect(() => {
    GetUserService().then((user) => {
      setUserData(user);
    });
  }, []);
  return (
    <div>
      <NavBar></NavBar>
      <div className="fullImage">
        <div className="vriad">
          <div className="leftData">
            {/* sx={{ marginLeft: '5%', height: '15%', width: '20%' }}> */}
            <Avatar
              sx={{ marginLeft: '5%', marginTop: '5%', height: '15%', width: '20%' }}
              src={userData.image}
              alt="avatar"
            />
            {userData.role === 'student' && (
              <div>
                <p className="userData"> {userData.name} </p>
                <p className="userData"> {userData.surname}</p>
                <p className="userData"> {userData.email}</p>
                <p className="userData"> {userData.role}</p>
                <p className="userData"> {userData.faculty}</p>
                <p className="userData"> {userData.group}</p>
              </div>
            )}
            {userData.role === 'teacher' && (
              <div>
                <p className="userData"> {userData.name} </p>
                <p className="userData"> {userData.surname}</p>
                <p className="userData"> {userData.email}</p>
                <p className="userData"> {userData.role}</p>
                <p className="userData"> {userData.faculty}</p>
                <p className="userData"> {userData.subject}</p>
                {/* <p className="userData"> {userData.rating}</p> */}
              </div>
            )}
            <Button
              color="inherit"
              onClick={changeUser}
              sx={{
                right: '0',
                marginLeft: '5vh',
                marginTop: '4vh',
                marginBottom: '7vh',
                borderColor: ' rgb(80, 67, 49)',
              }}>
              Change user data
            </Button>
            <Button
              color="inherit"
              onClick={goHome}
              sx={{
                right: '0',
                marginLeft: '5vh',
                marginTop: '4vh',
                marginBottom: '7vh',
                borderColor: ' rgb(80, 67, 49)',
              }}>
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
