import './Home.css';
import * as React from 'react';
import { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import CardTeacherComponent from '../Card/CardTeacher';
import CardSubjectComponent from '../Card/CardSubject';
import BottomNavigationComponent from '../BottomNavigation/BottomNavigation';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import LoggedInService from '../LoggedInService';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import GetUserService from '../GetUserService';
import Slide from '@mui/material/Slide';

const Home = () => {

  const [open, setOpen] = useState(false);

  const [isShow, setIsShow] = useState();

  const [user, setUser] = useState(null);

  const [transition, setTransition] = useState(undefined);

  useEffect(() => {
    if(LoggedInService() === true)
    {
      setIsShow('true');
      GetUserService().then(res => {setUser(res)});
      console.log(user);
      handleClick();
    }
  }, []);

  function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
  }

  const handleClick = () => {
    setTransition(() => TransitionUp);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <NavBar />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'center' }}>
        <CardTeacherComponent />
        <CardTeacherComponent />
        <CardTeacherComponent />
        <CardTeacherComponent />
        <CardTeacherComponent />
        <CardTeacherComponent />
        <CardTeacherComponent />
      </div>
      <div>
        <Stack spacing={2} sx={{marginLeft: '76vh', marginTop: '8vh'}}>
          <Pagination count={10} variant="outlined" color="primary" />
        </Stack>
      </div>
      {
        isShow &&
        <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={'Hello, ' + user.name + ' ' + user.surname + '!'}
        action={action}
        key={transition ? transition.name : ''}
        TransitionComponent={transition}
      />
      }
      <BottomNavigationComponent />
      {/* <div className='backgroundImage'/> */}

      {/* <CardSubjectComponent/> */}
      {/* <button onClick={populateWeatherData}>Click</button> */}
    </div>
  );
};

export default Home;
